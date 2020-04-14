using DMChess_Srv.EfMethods;
using DMChess_Srv.IO;
using DMChess_Srv.EfModel;
using DMChess_Srv.Parms;
using DMChess_Srv.Repositories;
using Newtonsoft.Json.Linq;

namespace DMChess_Srv
{
    public class DataController
    {
        #region References

        private Cookie Cookie = new Cookie();
        private Context Context = new Context();
        private Token Token = new Token();
        private Repository Repository = new Repository();
        private Carrier Carrier = new Carrier();
        private Game Game = new Game();
        private User User = new User();
        private Profile Profile = new Profile();

        #endregion

        public Result Get(string pAction, string pKey = null, string pKey2 = null)
        {
            var cookie = Cookie.Get();
            var efToken = Token.Swap(cookie.TokenId, cookie.DeviceId);
            var id = efToken.Id;
            var DeviceId = efToken.DeviceId;
            Cookie.Save(cookie, efToken);
            (Tokens EfToken, Result Result) response;
            switch (pAction)
            {
                case "Boot": response = User.Get_Boot(efToken); break;
                case "Anonymous": response = Repository.Get_Anonymous(efToken); break;
                case "Member": response = Repository.Get_Member(efToken); break;
                case "Ping": response = Repository.Get_Ping(efToken, pKey); break;
                case "LogIn": response = User.Get_LogIn(efToken, pKey, pKey2); break;
                case "LogOut": response = User.Get_LogOut(efToken); break;
                case "Restart": response = Game.Get_Restart(efToken); break;
                default: response = (efToken, new Result("Data Controller Unknown Get Action=" + pAction, null)); break;
            }
            Context.Save();
            return response.Result;
        }

        public Result Post(string pHost, object pPPost)
        {
            var cookie = Cookie.Get();
            var efToken = Token.Swap(cookie.TokenId, cookie.DeviceId);
            Cookie.Save(cookie, efToken);
            (Tokens EfToken, Result Result) response;
            var pPost = ((JObject)pPPost).ToObject<PPost>();
            switch (pPost.Action)
            {
                case "Email": response = User.Post_Email(efToken, pPost.Data); break;
                case "GetMoves": response = Game.Post_GetMoves(efToken, pPost.Data); break;
                case "Options": response = User.Post_Options(efToken, pPost.Data); break;
                case "Password": response = User.Post_Password(efToken, pPost.Data); break;
                case "Phone": response = User.Post_Phone(efToken, pPost.Data); break;
                case "Photo": response = User.Post_Photo(efToken, pPost.Data); break;
                case "Register": response = User.Post_Register(pHost, efToken, pPost.Data); break;
                case "Search": response = Profile.Post_Search(efToken, pPost.Data); break;
                case "Turn": response = Game.Post_Turn(efToken, pPost.Data); break;
                default: response = (efToken, new Result("Data Controller Unknown Get Action=" + pPost.Action, null)); break;
            }
            return response.Result;
        }
    }
}
