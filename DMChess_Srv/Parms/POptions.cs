using System;
using System.Collections.Generic;
using System.Text;

namespace DMChess_Srv.Parms
{
    public class POptions
    {
        public bool AudioOn { get; set; }
        public bool ClockShow { get; set; }
        public bool EmailAlerts { get; set; }
        public bool PhoneAlerts { get; set; }
        public bool PostToFacebook { get; set; }
    }
}
