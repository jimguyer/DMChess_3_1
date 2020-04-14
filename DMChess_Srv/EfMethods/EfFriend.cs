using DMChess_Srv.EfModel;
using System;
using System.Collections.Generic;
using System.Linq;

namespace D0Chess_Drv.EFMethods
{
    public class EfFriend
    {
        private readonly Context Context = new Context();

        public bool EfFriendAdd(Friends pFriend) { Context.Friends.Add(pFriend); return true; }

        public Friends EfFriendGet(Guid pAppId, Guid pMyUserId, int pProfileIdx, Guid pFriendUserId, int pFriendProfileIdx)
        {
            return Context.Friends.FirstOrDefault(x => x.UserId == pMyUserId && x.ProfileIdx == pProfileIdx &&
                x.FriendUserId == pFriendUserId && x.FriendProfileIdx == pFriendProfileIdx);
        }
        public Friends EfFriendNew(Guid pAppId, Guid pMyUserId, int pProfileIdx, Guid pFriendUserId, int pFriendProfileIdx)
        {
            return
                new Friends()
                {
                    UserId = pMyUserId,
                    ProfileIdx = pProfileIdx,
                    FriendUserId = pFriendUserId,
                    FriendProfileIdx = pFriendProfileIdx,
                    Sequence = 0
                };
        }
        public List<Friends> EfFriendsGet(Guid pUserId)
        {
            return Context.Friends.Where(x => x.UserId == pUserId).ToList();
        }
        public List<Friends> EfFriendsGet(Guid pUserId, int pProfileIdx)
        {
            return Context.Friends.Where(x => x.UserId == pUserId && x.ProfileIdx == pProfileIdx).ToList();
        }
    }
}
