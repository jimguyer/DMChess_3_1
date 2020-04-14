using System;
using System.Collections.Generic;
using System.Linq;

namespace DMChess_Srv.EfModel
{
    public class EfProfile
    {
        private readonly Context Context = new Context();

        public Profiles Get(Guid pUserId, int? pIdx) {
            return pIdx == null ? Context.Profiles.FirstOrDefault(x => x.UserId == pUserId) : Context.Profiles.FirstOrDefault(x => x.UserId == pUserId && x.Idx == pIdx);
        }

        public List<Profiles> Gets(Guid pUserId) { return Context.Profiles.Where(x => x.UserId == pUserId).ToList(); }

        public List<Profiles> GetsForUserId(string pUserId)
        {
            return Context.Profiles.Where(x => x.UserIdtextToLower == pUserId.ToLower()).ToList();
        }

        public Profiles GetForUserIdProfileIdx(Guid pUserId, int pIdx) { return Context.Profiles.FirstOrDefault(x => x.UserId == pUserId && x.Idx == pIdx); }


        public Profiles New(Guid pUserId, int pProfileIdx, string pUserIdtext, string pGroup = "Newbie")
        {
            return new Profiles()
            {
                UserId = pUserId,
                Idx = pProfileIdx,
                UserIdtext = pUserIdtext,
                UserIdtextToLower = pUserIdtext.ToLower(),
                Group = pGroup,
                GroupToLower = pGroup.ToLower(),
                PhotoBytes = null,
                IsPhotoApproved = false,
                Rating = 1200,
                StartParmsOpFindBy = "S",
                StartParmsRated = true,
                StartParmsTimeInc = "D",
                StartParmsTimeAmt = 3,
                StartEmailEmail = "",
                SearchBy = "U",
                SearchTextUserId = "",
                SearchTextGroup = "",
                SearchRatingMin = 0,
                SearchRatingMax = 0,
                CreateDt = DateTime.Now,
                CreateUserId = pUserId,
                ChangeDt = DateTime.Now,
                ChangeUserId = pUserId
            };
        }



        public List<Profiles> SearchForGroup(string pGroup) { return Context.Profiles.Where(x => x.GroupToLower.Contains(pGroup)).ToList(); }
        public List<Profiles> SearchForNameFirst(string pNameFirst) { return Context.Profiles.Where(x => x.NameLast.Contains(pNameFirst)).ToList(); }
        public List<Profiles> SearchForNameLast(string pNameLast) { return Context.Profiles.Where(x => x.NameLast.Contains(pNameLast)).ToList(); }
        public List<Profiles> SearchForUserId(string pUserId) { return Context.Profiles.Where(x => x.UserIdtextToLower.Contains(pUserId)).ToList(); }

        #region EfProfilesGet

        #endregion
    }
}
