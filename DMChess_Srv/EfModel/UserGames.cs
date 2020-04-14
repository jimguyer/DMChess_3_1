using System;
using System.Collections.Generic;

namespace DMChess_Srv.EfModel
{
    public partial class UserGames
    {
        public Guid UserId { get; set; }
        public int ProfileIdx { get; set; }
        public Guid GameId { get; set; }
        public Guid? FUrlparmId { get; set; }
        public bool RematchSent { get; set; }
        public string Sts { get; set; }
        public string GameName { get; set; }
        public bool MyTurn { get; set; }
        public bool? PlayingAsWhite { get; set; }
        public bool? Iwon { get; set; }
        public int? RatingBefore { get; set; }
        public int? RatingAfter { get; set; }
        public Guid CreateUserId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid ChangeUserId { get; set; }
        public DateTime ChangeDate { get; set; }
    }
}
