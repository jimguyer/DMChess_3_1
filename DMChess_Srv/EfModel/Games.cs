using System;
using System.Collections.Generic;

namespace DMChess_Srv.EfModel
{
    public partial class Games
    {
        public Guid Id { get; set; }
        public Guid? RelatedId { get; set; }
        public string PiecePos { get; set; }
        public string Script { get; set; }
        public bool? Rated { get; set; }
        public string TimeInc { get; set; }
        public int? TimeAmt { get; set; }
        public DateTime? StartDt { get; set; }
        public DateTime? LastActionDt { get; set; }
        public string Sts { get; set; }
        public string EndSts { get; set; }
        public bool? IsOver { get; set; }
        public DateTime? OverDt { get; set; }
        public Guid? CreateUserId { get; set; }
        public DateTime? CreateDt { get; set; }
        public Guid? ChangeUserId { get; set; }
        public DateTime? ChangeDt { get; set; }
    }
}
