using DMChess_Srv.Common;
using DMChess_Srv.EfMethods;
using DMChess_Srv.IO;
using DMChess_Srv.EfModel;
using DMChess_Srv.Parms;
using DMChess_Srv.Repositories;
using DMChess_Srv.Custom;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DMChess_Srv
{
    public class Repository
    {

        #region References
        Context Context = new Context();

        private readonly Move Move = new Move();
        private readonly Util Util = new Util();
        private readonly CUtil CUtil = new CUtil();

        private readonly Game Game = new Game();
        private readonly User User = new User();

        private readonly EfGame EfGame = new EfGame();
        private readonly EfCarrier EfCarrier = new EfCarrier();
        private readonly EfProfile EfProfile = new EfProfile();
        private readonly EfUser EfUser = new EfUser();
        private readonly EfUserGame EfUserGame = new EfUserGame();

        #endregion


        #region DataController Get


        public (Tokens, Result) Get_Anonymous(Tokens pEfToken)
        {
            var carriers = EfCarrier.GetNames();
            var register = User.GetRegister(pEfToken);
            var practice = Game.GetPractice(pEfToken);
            return (pEfToken, new Result(new { Carriers = carriers, Register = register, Practice = practice }));
        }
        public (Tokens, Result) Get_Member(Tokens pEfToken)
        {

            #region Prep
            Games efGame = null;
            Profiles efProfileMe = null;
            Profiles efProfileOp = null; UserGames efGameOp = null;

            var game_Script = new List<List<Script>>();
            var turn_piecePos = Move.StartPiecePos;

            DateTime? turnExpiration = null;
            var script = new List<List<String>>();
            var whitesTurn = true;
            double secondsLeft = 0;
            int[] piecePos = null;
            object turn = null;

            var gamesActive = new List<object>();
            var challengesReceived = new List<object>();
            var challengesSent = new List<object>();
            #endregion

            #region Get efUser & efProfiles

            if (pEfToken.UserId == null) return (pEfToken, new Result("UserIdIsNull", null));
            var efUser = EfUser.Get(pEfToken.UserId.Value);
            var efProfiles = EfProfile.Gets(pEfToken.UserId.Value);

            #endregion

            #region Email

            var emailEntry = (efUser.EmailConfirmCode == null || efUser.EmailConfirmCode.Trim() == "");
            var email = new { Entry = emailEntry, Address = efUser.EmailAddress };
            #endregion

            #region Phone

            var carriers = EfCarrier.GetNames();
            var phoneEntry = (efUser.PhoneConfirmCode.Trim() == "") ? true : false;
            var phone = new { Carriers = carriers, Entry = phoneEntry, Carrier = efUser.PhoneCarrier, Number = efUser.PhoneNumber };

            #endregion

            #region Practice
            object practice;
            efGame = EfGame.Get(pEfToken.UserId.Value); // Practice game uses the UserId as the Id 

            if (efGame == null || efGame.Script == "") practice = new { Script = "", Turn = new { } };
            else
            {
                //script = new List<List<String>>();
                //foreach (var xTurnScript in efGame.Script.Split(';').ToList()) script.Add(xTurnScript.Split(',').ToList());
                //piecePos = Array.ConvertAll(efGame.PiecePos.Split(',').ToArray(), int.Parse);

                turn_piecePos = JsonConvert.DeserializeObject<int[]>(efGame.PiecePos);
                game_Script = JsonConvert.DeserializeObject<List<List<Script>>>(efGame.Script);

                var pTurn = Move.GetTurn(game_Script, piecePos);
                practice = new { Script = game_Script, Turn = pTurn };
            }

            #endregion

            #region Online

            #region foreach (var xEfGameMe in efGamesMe)
            foreach (var xEfGameMe in EfUserGame.GetsForUserId(pEfToken.UserId.Value))
            {
                #region Prep

                efGame = EfGame.Get(xEfGameMe.GameId); if (efGame == null) continue;
                efGameOp = EfUserGame.GetForIdDifferentUserId(xEfGameMe.GameId, efUser.Id); if (efGameOp == null) continue;
                efProfileOp = EfProfile.GetForUserIdProfileIdx(efGameOp.UserId, efGameOp.ProfileIdx);
                var OpImg_Src = (efProfileOp.PhotoBytes == null) ? null : Images.GetBase64String(efProfileOp.PhotoBytes);

                #endregion

                #region script & whitesTurn
                if (xEfGameMe.PlayingAsWhite != null)
                {
                    if (efGame.Script == "") { script = new List<List<String>>(); }
                    else
                    {
                        script = new List<List<String>>();
                        foreach (var xTurnScript in efGame.Script.Split(';').ToList()) script.Add(xTurnScript.Split(',').ToList());
                        whitesTurn = (script.Count() % 2 == 0);
                    }

                }
                #endregion

                #region Check turn_Expiration 

                if (efGame.Sts == "A")
                {
                    if (efGame.LastActionDt != null) turnExpiration = Game.GetTurnExpiration(efGame.LastActionDt.Value, System.Convert.ToChar(efGame.TimeInc), efGame.TimeAmt.Value);
                    if (turnExpiration.Value > DateTime.Now) secondsLeft = Math.Round((turnExpiration.Value - DateTime.Now).TotalSeconds);
                    else
                    {

                        efProfileMe = EfProfile.GetForUserIdProfileIdx(xEfGameMe.UserId, xEfGameMe.ProfileIdx);

                        #region update eGame
                        efGame.LastActionDt = DateTime.Now;
                        efGame.IsOver = true;
                        efGame.OverDt = DateTime.Now;
                        efGame.Sts = "O";
                        efGame.EndSts = (whitesTurn) ? "W_TE" : "B_TE";
                        efGame.ChangeUserId = efProfileMe.UserId;
                        efGame.ChangeDt = DateTime.Now;

                        #endregion

                        #region  update UserGames

                        xEfGameMe.Sts = "H"; efGameOp.Sts = "H";
                        xEfGameMe.Iwon = (whitesTurn != xEfGameMe.PlayingAsWhite); efGameOp.Iwon = !xEfGameMe.Iwon.Value;
                        xEfGameMe.ChangeUserId = xEfGameMe.UserId; efGameOp.ChangeUserId = xEfGameMe.UserId;
                        xEfGameMe.ChangeDate = DateTime.Now; efGameOp.ChangeDate = DateTime.Now;

                        #endregion

                        #region  update eProfiles

                        (efProfileMe.Rating, efProfileOp.Rating) = CUtil.CalcRatings(xEfGameMe.Iwon.Value, efProfileMe.Rating, efProfileOp.Rating);
                        xEfGameMe.RatingAfter = efProfileMe.Rating;
                        efGameOp.RatingAfter = efProfileOp.Rating;

                        #endregion
                    }
                }
                #endregion

                #region games.Add

                switch (xEfGameMe.Sts)
                {
                    case "A":
                        #region piecePos & turn
                        if (script.Count() == 0) { piecePos = null; turn = null; }
                        else
                        {
                            piecePos = Array.ConvertAll(efGame.PiecePos.Split(',').ToArray(), int.Parse);
                            turn = Move.GetTurn(whitesTurn, piecePos);
                        }

                        #endregion

                        #region gamesActive.Add
                        gamesActive.Add(
                            new
                            {
                                Id = xEfGameMe.GameId,
                                xEfGameMe.GameName,
                                xEfGameMe.ProfileIdx,
                                Date = efGame.CreateDt.Value.ToString("MM/dd/yy"),
                                efGame.Rated,
                                efGame.TimeInc,
                                efGame.TimeAmt,

                                xEfGameMe.PlayingAsWhite,
                                Script = script,
                                Turn = turn,

                                OpUserId = efProfileOp.UserId,
                                OpImg_Src,
                                OpName = efProfileOp.NameFirst + " " + efProfileOp.NameLast,
                                OpGroup = efProfileOp.Group,
                                OpRating = efProfileOp.Rating,
                                SecondsLeft = secondsLeft
                            }
                        );
                        break;
                    #endregion

                    case "R":
                        #region challengesReceived.Add
                        challengesReceived.Add(
                            new
                            {
                                Id = xEfGameMe.GameId,
                                MotherId = efGame.RelatedId,
                                xEfGameMe.ProfileIdx,
                                Date = efGame.CreateDt.Value.ToString("MM/dd/yy"),
                                efGame.Rated,
                                efGame.TimeInc,
                                efGame.TimeAmt,
                                OpUserId = efProfileOp.UserId,
                                OpImg_Src,
                                OpName = efProfileOp.NameFirst + " " + efProfileOp.NameLast,
                                OpGroup = efProfileOp.Group,
                                OpRating = efProfileOp.Rating
                            }
                        );
                        break;
                    #endregion

                    case "S":
                        #region gamesSent.Add
                        challengesSent.Add(
                            new
                            {
                                Id = xEfGameMe.GameId,
                                MotherId = efGame.RelatedId,
                                xEfGameMe.ProfileIdx,

                                Date = efGame.CreateDt.Value.ToString("MM/dd/yy"),
                                efGame.Rated,
                                efGame.TimeInc,
                                efGame.TimeAmt,

                                OpImg_Src,
                                OpUserId = efProfileOp.UserId,
                                OpName = efProfileOp.NameFirst + " " + efProfileOp.NameLast,
                                OpGroup = efProfileOp.Group,
                                OpRating = efProfileOp.Rating
                            }
                        );
                        break;
                        #endregion
                }

                #endregion
            }
            #endregion


            var games = new
            {
                Active = gamesActive,
                Received = challengesReceived,
                Sent = challengesSent
            };

            #endregion

            #region Membership

            var expiration = (efUser.MembershipExpiration == null) ? DateTime.Now.AddYears(1).ToString("MM/dd/yy") : efUser.MembershipExpiration.Value.ToString("MM/dd/yy");
            var membership = new { Level = efUser.MembershipLevel, Expiration = expiration };

            #endregion

            #region Options

            var options = new
            {
                EmailAlerts = efUser.OptsEmailAlerts,
                PhoneAlerts = efUser.OptsPhoneAlerts,
                AudioOn = efUser.OptsAudioOn,
                ClockShow = efUser.OptsClockShow,
                PostToFacebook = efUser.OptsPostToFacebook
            };

            #endregion

            #region Profiles

            var profiles = new List<object>();
            foreach (var x in EfProfile.Gets(pEfToken.UserId.Value))
            {
                var photo_Src = Images.GetBase64String(x.PhotoBytes);
                var startParms = new { Rated = x.StartParmsRated, TimeInc = x.StartParmsTimeInc, TimeAmt = x.StartParmsTimeAmt, OpFindBy = x.StartParmsOpFindBy };
                var startEmail = new { Email = x.StartEmailEmail, NameFirst = x.StartEmailNameFirst, NameLast = x.StartEmailNameLast };
                var search = new
                {
                    By = x.SearchBy,
                    RatingMin = x.SearchRatingMin,
                    RatingMax = x.SearchRatingMax,
                    TextNameFirst = x.SearchTextNameFirst,
                    TextGroup = x.SearchTextGroup,
                    TextNameLast = x.SearchTextNameLast,
                    TextUserId = x.SearchTextUserId
                };
                var activeGames = EfUserGame.CountForUserIdProfileIdxSts(x.UserId, x.Idx, "A");
                var challenges = EfUserGame.CountForUserIdProfileIdxSts(x.UserId, x.Idx, "R") + EfUserGame.CountForUserIdProfileIdxSts(x.UserId, x.Idx, "S");
                var wins = EfUserGame.CountForUserIdProfileIdxIWon(x.UserId, x.Idx, false);
                var losses = EfUserGame.CountForUserIdProfileIdxIWon(x.UserId, x.Idx, false);
                var winsLosses = wins.ToString() + "/" + losses.ToString();
                profiles.Add(new
                {
                    x.Idx,
                    Photo_Src = photo_Src,
                    UserId = x.UserIdtext,
                    x.NameFirst,
                    x.NameLast,
                    x.Group,
                    x.Rating,
                    Challenges = challenges.ToString(),
                    ActiveGames = activeGames,
                    WinsLosses = winsLosses,
                    Search = search,
                    StartEmail = startEmail,
                    StartParms = startParms,
                });
            }
            var (ProfilesLimit, GamesLimit, ProfilesMax) = User.GetLimits(efUser.MembershipLevel);
            #endregion

            #region Save and return

            return (pEfToken,
                new Result(
                    new
                    {
                        GamesLimit,
                        Games = games,
                        ProfileIdxDefault = efUser.ProfileIdxDefault,
                        ProfilesLimit,
                        Profiles = profiles,
                        Practice = practice,

                        Membership = membership,
                        Email = email,
                        Phone = phone,
                        Options = options
                    }
                )
            );

            #endregion

        }


        public (Tokens, Result) Get_Code(Tokens pEfToken)
        {
            pEfToken.Code = GetRandom.Number(5);
            return (pEfToken, new Result(Images.GetBase64String(pEfToken.Code)));
        }
        public (Tokens, Result) Get_Ping(Tokens pEfToken, string pKey)
        {
            //var cookie = Cookie.Get();
            //cookie.IPAddress = "xxxxxx";
            //Cookie.Save(cookie);
            Hub.Send("Ping", pKey);
            return (pEfToken, new Result(pKey));
        }

        #endregion
    }
}
