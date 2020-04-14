using DMChess_Srv.Common;
using DMChess_Srv.Parms;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DMChess_Srv.EfModel
{
    public class EfToken
    {
        #region References

        Context Context = new Context();
        PToken PToken = new PToken();
        public Util Util = new Util();

        #endregion


        public void Add(Tokens efToken)
        {
            Context.Tokens.Add(efToken);
            Context.Save();
        }

        #region EfGet

        public Tokens Get(Guid? pId)
        {
            return Context.Tokens.FirstOrDefault(x => x.Id == pId.Value);
        }
        #endregion

        #region EF Gets
        private List<Tokens> GetsForDeviceId(Guid? pDeviceId)
        {
            return pDeviceId == null ? new List<Tokens>() : Context.Tokens.Where(x => x.DeviceId == pDeviceId.Value).ToList();
        }
        private List<Tokens> GetsForIPAddress(string pIPAdress)
        {
            return string.IsNullOrWhiteSpace(pIPAdress) ? new List<Tokens>() : Context.Tokens.Where(x => x.Ipaddress == pIPAdress).ToList();
        }

        private List<Tokens> GetsForUserId(Guid? pUserId)
        {
            return pUserId == null ? new List<Tokens>() : Context.Tokens.Where(x => x.UserId == pUserId.Value).ToList();
        }
        #endregion

        public Tokens Convert(Tokens pEfToken)
        {
            return new Tokens()
            {
                Id = Guid.NewGuid(),
                IsAnonymous = pEfToken.IsAnonymous,
                IsJustRegistered = pEfToken.IsJustRegistered,
                IsJustLoggedIn = pEfToken.IsJustLoggedIn,
                IsJustLoggedOut = pEfToken.IsJustLoggedOut,
                UserId = pEfToken.UserId,
                ProfileIdx = pEfToken.ProfileIdx,
                DeviceId = pEfToken.DeviceId,
                Code = pEfToken.Code,
                Msg = pEfToken.Msg,
                Urlid = pEfToken.Urlid,
                CreateUserId = pEfToken.CreateUserId,
                CreateDt = pEfToken.CreateDt,
                CreateMod = pEfToken.CreateMod,
                ChangeUserId = pEfToken.UserId,
                ChangeDt = System.DateTime.Now,
                ChangeMod = "Swap"
            };
        }



        #region New
        public Tokens New(Guid? pDeviceid = null, string pMod = "New")
        {
            var deviceId = pDeviceid != null ? pDeviceid : pDeviceid = Guid.NewGuid();

            var newToken = new Tokens()
            {
                Id = Guid.NewGuid(),
                IsAnonymous = true,
                IsJustRegistered = false,
                IsJustLoggedIn = false,
                IsJustLoggedOut = false,
                UserId = pDeviceid,
                ProfileIdx = 0,
                DeviceId = pDeviceid,
                Code = "",
                Msg = "",
                Urlid = null,
                CreateUserId = pDeviceid,
                CreateDt = System.DateTime.Now,
                CreateMod = pMod,
                ChangeUserId = pDeviceid,
                ChangeDt = System.DateTime.Now,
                ChangeMod = pMod
            };
            return newToken;
        }
        #endregion

        public void RemoveRangeForDeviceId(Guid? pDeviceId)
        {
            if(pDeviceId != null) this.RemoveRange(GetsForDeviceId(pDeviceId));
        }
        public void RemoveRangeForIPAddress(string pIPAdress)
        {
            if (!string.IsNullOrWhiteSpace(pIPAdress)) this.RemoveRange(GetsForIPAddress(pIPAdress));
        }
        public void RemoveRangeForUserId(Guid? pUserId)
        {
            if (pUserId != null) this.RemoveRange(GetsForUserId(pUserId));
        }


        private void RemoveRange(List<Tokens> pTokens)
        {
            Context.Tokens.RemoveRange(pTokens);
        }
    }
}
