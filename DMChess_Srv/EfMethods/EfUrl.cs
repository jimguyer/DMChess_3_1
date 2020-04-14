using System;
using System.Linq;

namespace DMChess_Srv.EfModel
{
    public class EfUrl
    {
        private readonly Context Context = new Context();

        public Urls Add(Guid pUserId, string pAction, string pPaypal = null)
        {
            var efUrl = new Urls()
            {
                Id = Guid.NewGuid(),
                UserId = pUserId,
                Action = pAction,
                Paypal = pPaypal,
                CreateUserId = pUserId,
                CreateDt = DateTime.Now,
                ChangeUserId = pUserId,
                ChangeDt = DateTime.Now
            };
            Context.Urls.Add(efUrl);
            return efUrl;
        }
        public Urls New( string pAction, Guid pUserId)
        {
            var uRLParm = new Urls()
            {
                Id = Guid.NewGuid(),
                UserId = pUserId,
                Action = pAction,
                CreateUserId = pUserId,
                CreateDt = DateTime.Now,
                ChangeUserId = pUserId,
                ChangeDt = DateTime.Now
            };
            return uRLParm;
        }


        public Urls New(Guid pId, Guid pDeviceId, Guid pUserId, string pAction, Guid pGameId, Guid pMyUserId)
        {
            var uRLParm = new Urls()
            {
                Id = pId,
                UserId = pUserId,
                Action = pAction,
                GameId = pGameId,
                CreateUserId = pUserId,
                CreateDt = DateTime.Now,
                ChangeUserId = pUserId,
                ChangeDt = DateTime.Now
            };
            return uRLParm;
        }




        public Urls Get(Guid pId)
        {
            return Context.Urls.FirstOrDefault(x => x.Id == pId);
        }

        public bool Remove(Guid pId)
        {
            Context.Urls.Remove(Context.Urls.FirstOrDefault(x => x.Id == pId));
            return true;
        }

        public bool RemoveRange(Guid pUserId, string pAction)
        {
            Context.Urls.RemoveRange(Context.Urls.Where(x => x.Action == pAction));
            return true;
        }
    }
}
