using DMChess_Srv.EfMethods;
using DMChess_Srv.EfModel;
using DMChess_Srv.Parms;
using DMChess_Srv.Common;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DMChess_Srv.Repositories
{
    public class Token
    {
        #region References

        Context Context = new Context();
        private EfToken EfToken = new EfToken();
        PToken PToken = new PToken();
        public Util Util = new Util();

        #endregion

        public Tokens Swap(Guid? pTokenid, Guid? pDeviceId )
        {
            Tokens oldEfToken;
            Tokens newEfToken;
            var ipAddress = Util.GetIPAddress();
            if (pTokenid == null) newEfToken = EfToken.New();
            else
            {
                oldEfToken = EfToken.Get(pTokenid);
                if (oldEfToken == null)
                {
                    EfToken.RemoveRangeForIPAddress(ipAddress);
                    EfToken.RemoveRangeForDeviceId(pDeviceId);
                    newEfToken = EfToken.New(null, "Missing"); // Token got deleted
                }
                else if (oldEfToken.Ipaddress != ipAddress)
                {
                    // Something wrong
                    EfToken.RemoveRangeForIPAddress(ipAddress);
                    EfToken.RemoveRangeForDeviceId(pDeviceId);
                    EfToken.RemoveRangeForIPAddress(oldEfToken.Ipaddress);
                    EfToken.RemoveRangeForDeviceId(oldEfToken.DeviceId);
                    EfToken.RemoveRangeForUserId(oldEfToken.UserId);
                    Context.Save();
                    newEfToken = EfToken.New(null, "Breach"); // Token got copied
                }
                else
                {
                    newEfToken = EfToken.Convert(oldEfToken);
                    EfToken.RemoveRangeForDeviceId(oldEfToken.DeviceId);
                    EfToken.RemoveRangeForUserId(oldEfToken.UserId);
                    Context.Save();

                }
            }
            newEfToken.Ipaddress = ipAddress;
            EfToken.Add(newEfToken);
            Context.Save();
            return newEfToken;
        }
    }
}
