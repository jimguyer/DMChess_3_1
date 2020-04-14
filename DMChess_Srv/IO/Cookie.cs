using DMChess_Srv.EfModel;
using DMChess_Srv.Common;
using Microsoft.AspNetCore.Http;
using System;


namespace DMChess_Srv.IO
{
    public class Cookie
    {
        //public ControllerContext Context { get; set; }
        public static HttpContext HttpContext { get; set; }

        public Util Util = new Util();

        #region Properties
        public Guid? TokenId { get; set; }
        public Guid? DeviceId { get; set; }
        #endregion

        public Cookie() { }
        public Cookie(HttpContext pHttpContext) { HttpContext = pHttpContext; }

        public Cookie Get()
        {
            this.TokenId = Util.ConvertGuid(HttpContext.Request.Cookies["TokenId"]);
            this.DeviceId = Util.ConvertGuid(HttpContext.Request.Cookies["DeviceId"]);
            return this;
        }
        public bool Save(Cookie pCookie, Tokens pEfToken)
        {
            pCookie.TokenId = pEfToken.Id;
            pCookie.DeviceId = pEfToken.DeviceId;
            return Save(pCookie);
        }

        public bool Save(Cookie pCookie)
        {
            var CookieOptions = new CookieOptions { Expires = DateTime.Now.AddYears(1) };
            HttpContext.Response.Cookies.Append("TokenId", pCookie.TokenId.ToString(), CookieOptions);
            HttpContext.Response.Cookies.Append("DeviceId", pCookie.DeviceId.ToString(), CookieOptions);
            return true;
        }
    }
}
