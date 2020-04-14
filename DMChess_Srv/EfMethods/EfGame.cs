using DMChess_Srv.EfModel;
using System;
using System.Linq;

namespace DMChess_Srv.EfMethods
{
    public class EfGame
    {
        private readonly Context Context = new Context();

        public void Add(Games pGame) { Context.Games.Add(pGame); Context.Save(); }
        public void Update(Games pGame) { Context.Games.Update(pGame); Context.Save(); }

        public Games Get(Guid pGameId)
        {
            return Context.Games.FirstOrDefault(x => x.Id == pGameId);
        }
        public Games Convert(Games pEfGame, Tokens pToken)
        {
            if (pEfGame == null)
            {
                pEfGame = new Games()
                {
                    Id = pToken.IsAnonymous ? pToken.DeviceId.Value: pToken.UserId.Value,
                    CreateUserId = pToken.UserId == null ? pToken.DeviceId.Value : pToken.UserId.Value,
                    CreateDt = DateTime.Now
                };
            };
            pEfGame.LastActionDt = DateTime.Now;
            pEfGame.ChangeUserId = pToken.UserId == null ? pToken.DeviceId.Value : pToken.UserId.Value;
            pEfGame.ChangeDt = DateTime.Now;
            return pEfGame;
        }
    }
}
