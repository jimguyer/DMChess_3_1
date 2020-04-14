using DMChess_Srv.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace DMChess_Srv.Controllers
{
    [Route("api/[controller]/[action]")]
    public class WebController : Microsoft.AspNetCore.Mvc.ControllerBase
    {
        #region Init

        private readonly JsonSerializer JsonSerializer = new JsonSerializer();
        private DataController DataController = new DataController();
        private IHttpContextAccessor HttpContextAccessor;
        //private readonly DMChess_Srv.IO.Cookie IO_Cookie = new DMChess_Srv.IO.Cookie();


        #endregion

        //public WebController(IHubContext<DMChess_Srv.IO.Hub> hubContext) { DMChess_Srv.IO.Hub.StaticContext = hubContext; }

        //public WebController(IUrlHelperFactory pUrlHelperFactory, IActionContextAccessor pActionContextAccessor, IHubContext<DMChess_Srv.IO.Hub> pHubContext, IHttpContextAccessor pHttpContextAccessor)
        public WebController(IHubContext<DMChess_Srv.IO.Hub> pHubContext, IHttpContextAccessor pHttpContextAccessor)
        {
            new DMChess_Srv.IO.Cookie(pHttpContextAccessor.HttpContext);
            HttpContextAccessor = pHttpContextAccessor;
            DMChess_Srv.IO.Hub.StaticContext = pHubContext;
        }


        [HttpGet]
        public async Task<Result> Get(string pAction, string pKey = "", string pKey2 = "")
        {
            return await Task.Run(() => DataController.Get(pAction, pKey, pKey2));
        }

        [HttpPost]
        public async Task<Result> Post([FromBody] object pParms)
        {
            var host = HttpContextAccessor.HttpContext.Request.Host.Value;
            return await Task.Run(() => DataController.Post(host, pParms));
        }
    }
}