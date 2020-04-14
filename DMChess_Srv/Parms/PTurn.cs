using System;
using System.Collections.Generic;
using System.Text;

namespace DMChess_Srv.Parms
{
    public class PTurn
    {
        public Guid? GameId { get; set; }
        public int Idx { get; set; }
        public List<Script> Script { get; set; }
    }
}
