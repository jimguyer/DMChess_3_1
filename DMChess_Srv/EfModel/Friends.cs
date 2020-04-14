using System;
using System.Collections.Generic;

namespace DMChess_Srv.EfModel
{
    public partial class Friends
    {
        public Guid UserId { get; set; }
        public int ProfileIdx { get; set; }
        public Guid FriendUserId { get; set; }
        public int FriendProfileIdx { get; set; }
        public int? Sequence { get; set; }
    }
}
