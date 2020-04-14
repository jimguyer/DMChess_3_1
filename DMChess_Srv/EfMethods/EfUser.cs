using DMChess_Srv.EfModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DMChess_Srv.EfModel
{
    public class EfUser
    {
        private readonly Context Context = new Context();
        public bool CheckEmailInUse(string pEmailAddress)
        {
            return Context.Users.FirstOrDefault(x => x.EmailAddressToLower == pEmailAddress) != null;
        }

        public Users Get(Guid pId) { return Context.Users.FirstOrDefault(x => x.Id == pId); }
        public Users GetForIdPassword(Guid pId, string pPassword) { return Context.Users.FirstOrDefault(x => x.Id == pId && x.Password == pPassword); }
        public Users GetForLogOn(string pEmailAddress, string pPassword) { return Context.Users.FirstOrDefault(x => x.EmailAddress == pEmailAddress); }
        public Users GetForEmailAddressPassword(string pEmailAddress, string pPassword)
        {
            return Context.Users.FirstOrDefault(x => x.EmailAddressToLower == pEmailAddress && x.Password == pPassword);
        }
        public Users GetForEmailAddress(string pEmailAddress)
        {
            return Context.Users.FirstOrDefault(x => x.EmailAddressToLower == pEmailAddress);
        }
        public Users New(string pEmailAddress, string pPassword, string pEmailConfirmCode) {
            var UserId = Guid.NewGuid();
            return new Users()
            {
                Id = UserId,
                Password = pPassword,
                PasswordToLower = pPassword.ToLower(),
                IsOnline = false,
                EmailAddress = pEmailAddress,
                EmailAddressToLower = pEmailAddress.ToLower(),
                EmailConfirmCode = pEmailConfirmCode,

                PhoneCarrier = "",
                PhoneNumber = 0,
                PhoneConfirmCode = "",
                OptsEmailAlerts = false,
                OptsPhoneAlerts = false,
                OptsAudioOn = false,
                OptsClockShow = false,
                OptsPostToFacebook = false,

                Role = "Member",
                MembershipLevel = "F",
                MembershipExpiration = null,
                LastActivityDt = DateTime.Now,
                CreateDt = DateTime.Now,
                CreateUserId = UserId,
                ChangeDt = DateTime.Now,
                ChangeUserId = UserId
            };

        }
    }
}
