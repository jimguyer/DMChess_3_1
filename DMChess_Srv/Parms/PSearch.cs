using System;
using System.Collections.Generic;
using System.Text;

namespace DMChess_Srv.Parms
{
    public class PSearch
    {
        public int ProfileIdx { get; set; }
        public string By { get; set; }
        public string Text { get; set; }
        public int Min { get; set; }
        public int Max { get; set; }
    }
}
