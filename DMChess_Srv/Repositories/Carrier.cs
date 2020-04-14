using DMChess_Srv.EfMethods;
using DMChess_Srv.EfModel;
using DMChess_Srv.IO;

namespace DMChess_Srv.Repositories
{
    public class Carrier
    {
        private readonly EfCarrier EfCarrier = new EfCarrier();
        public (Tokens, Result) Get_Names(Tokens pEfToken)
        {
            return (pEfToken, new Result(EfCarrier.GetNames()));
        }
    }
}
