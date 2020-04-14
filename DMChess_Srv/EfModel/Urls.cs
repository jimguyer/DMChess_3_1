using System;
using System.Collections.Generic;

namespace DMChess_Srv.EfModel
{
    public partial class Urls
    {
        public Guid Id { get; set; }
        public Guid? UserId { get; set; }
        public string Action { get; set; }
        public string Route { get; set; }
        public string View { get; set; }
        public string Paypal { get; set; }
        public Guid? GameId { get; set; }
        public Guid CreateUserId { get; set; }
        public DateTime CreateDt { get; set; }
        public Guid ChangeUserId { get; set; }
        public DateTime ChangeDt { get; set; }
    }
}
