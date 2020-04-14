using System;
using System.Collections.Generic;

namespace DMChess_Srv.EfModel
{
    public partial class Tokens
    {
        public Guid Id { get; set; }
        public bool IsAnonymous { get; set; }
        public bool IsJustRegistered { get; set; }
        public bool IsJustLoggedIn { get; set; }
        public bool IsJustLoggedOut { get; set; }
        public string EmailUserId { get; set; }
        public Guid? UserId { get; set; }
        public int? ProfileIdx { get; set; }
        public Guid? DeviceId { get; set; }
        public string Ipaddress { get; set; }
        public string Code { get; set; }
        public string Msg { get; set; }
        public Guid? Urlid { get; set; }
        public Guid? CreateUserId { get; set; }
        public DateTime? CreateDt { get; set; }
        public string CreateMod { get; set; }
        public Guid? ChangeUserId { get; set; }
        public DateTime? ChangeDt { get; set; }
        public string ChangeMod { get; set; }
    }
}
