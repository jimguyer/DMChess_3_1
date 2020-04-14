using System;
using System.Collections.Generic;

namespace DMChess_Srv.EfModel
{
    public partial class Users
    {
        public Guid Id { get; set; }
        public string EmailAddress { get; set; }
        public string EmailAddressToLower { get; set; }
        public string EmailConfirmCode { get; set; }
        public string Password { get; set; }
        public string PasswordToLower { get; set; }
        public bool IsOnline { get; set; }
        public Guid? ConnectionId { get; set; }
        public int ProfileIdxDefault { get; set; }
        public string MembershipLevel { get; set; }
        public DateTime? MembershipExpiration { get; set; }
        public string Role { get; set; }
        public string PhoneCarrier { get; set; }
        public long? PhoneNumber { get; set; }
        public string PhoneConfirmCode { get; set; }
        public bool OptsEmailAlerts { get; set; }
        public bool OptsPhoneAlerts { get; set; }
        public bool OptsAudioOn { get; set; }
        public bool OptsClockShow { get; set; }
        public bool? OptsPostToFacebook { get; set; }
        public DateTime LastActivityDt { get; set; }
        public DateTime CreateDt { get; set; }
        public Guid CreateUserId { get; set; }
        public DateTime ChangeDt { get; set; }
        public Guid ChangeUserId { get; set; }
    }
}
