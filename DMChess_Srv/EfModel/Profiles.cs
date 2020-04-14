using System;
using System.Collections.Generic;

namespace DMChess_Srv.EfModel
{
    public partial class Profiles
    {
        public Guid UserId { get; set; }
        public int Idx { get; set; }
        public string UserIdtext { get; set; }
        public string UserIdtextToLower { get; set; }
        public byte[] PhotoBytes { get; set; }
        public bool? IsPhotoApproved { get; set; }
        public string NameFirst { get; set; }
        public string NameLast { get; set; }
        public string Group { get; set; }
        public string GroupToLower { get; set; }
        public int Rating { get; set; }
        public string StartParmsOpFindBy { get; set; }
        public string StartParmsTimeInc { get; set; }
        public int? StartParmsTimeAmt { get; set; }
        public bool? StartParmsRated { get; set; }
        public string StartEmailEmail { get; set; }
        public string StartEmailNameFirst { get; set; }
        public string StartEmailNameLast { get; set; }
        public string SearchBy { get; set; }
        public string SearchTextUserId { get; set; }
        public string SearchTextGroup { get; set; }
        public string SearchTextNameLast { get; set; }
        public string SearchTextNameFirst { get; set; }
        public int? SearchRatingMin { get; set; }
        public int? SearchRatingMax { get; set; }
        public Guid? CreateUserId { get; set; }
        public DateTime? CreateDt { get; set; }
        public Guid? ChangeUserId { get; set; }
        public DateTime? ChangeDt { get; set; }
    }
}
