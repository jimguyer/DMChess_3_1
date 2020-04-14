using System;
using System.Collections.Generic;

namespace DMChess_Srv.EfModel
{
    public partial class Carriers
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Sms { get; set; }
        public string Mms { get; set; }
    }
}
