using DMChess_Srv.Common;
using DMChess_Srv.EfMethods;
using DMChess_Srv.EfModel;
using DMChess_Srv.IO;
using DMChess_Srv.Parms;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;

namespace DMChess_Srv.Repositories
{
    public class Profile
    {

        #region References
        private readonly Context Context = new Context();
        private readonly EfProfile EfProfile = new EfProfile();
        #endregion

        public (Tokens, Result) Post_Search(Tokens pEfToken, object pData)
        {
            var pSearch = ((JObject)pData).ToObject<PSearch>();
            var efProfile = EfProfile.GetForUserIdProfileIdx(pEfToken.UserId.Value, pSearch.ProfileIdx);
            efProfile.SearchBy = pSearch.By;
            switch (pSearch.By)
            {
                case "G": efProfile.SearchTextGroup = pSearch.Text; break;
                case "F": efProfile.SearchTextNameFirst = pSearch.Text; break;
                case "L": efProfile.SearchTextNameLast = pSearch.Text; break;
                case "U": efProfile.SearchTextUserId = pSearch.Text; break;
            }
            efProfile.SearchRatingMin = pSearch.Min;
            efProfile.SearchRatingMax = pSearch.Max;
            var efProfiles = new List<Profiles>();


            switch (pSearch.By)
            {
                case "G": efProfiles = EfProfile.SearchForGroup(pSearch.Text); break;
                case "F": efProfiles = EfProfile.SearchForNameFirst(pSearch.Text); break;
                case "L": efProfiles = EfProfile.SearchForNameLast(pSearch.Text); break;
                case "U": efProfiles = EfProfile.SearchForUserId(pSearch.Text); break;
            }
            var profiles = new List<object>();

            foreach (var profile in efProfiles)
                profiles.Add(
                    new {
                        UserId = profile.UserIdtext,
                        Photo_Src = Images.GetBase64String(profile.PhotoBytes),
                        Name = profile.NameFirst + " " + profile.NameLast,
                        profile.Rating
                    }
                );

            Context.Profiles.Update(efProfile);
            Context.Save();
            return (pEfToken, new Result(profiles));
        }
    }
}
