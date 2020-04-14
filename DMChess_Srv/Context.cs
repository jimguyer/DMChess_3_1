/*
Scaffold-DbContext "Data Source=palm.arvixe.com;Initial Catalog=DMChess; Persist Security Info=True;User ID=Noreply;Password=NoReply7789" Microsoft.EntityFrameworkCore.SqlServer -OutputDir EfModel -Context Context -f
Scaffold-DbContext "Data Source=68.71.130.74,1533;Initial Catalog=DMChess; Persist Security Info=True;User ID=DMChess;Password=DMChess#7789" Microsoft.EntityFrameworkCore.SqlServer -OutputDir EfModel -Context Context -f

*/

using Microsoft.EntityFrameworkCore;
using System;

namespace DMChess_Srv.EfModel
{
    public partial class Context : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //optionsBuilder.UseSqlServer("Data Source=dmchess.database.windows.net;Initial Catalog=dmchess;Persist Security Info=True;User ID=jimguyer;Password=Bruno#567789");
                //optionsBuilder.UseSqlServer("Data Source=palm.arvixe.com;Initial Catalog=DMChess; Persist Security Info=True;User ID=Noreply;Password=NoReply7789");
                optionsBuilder.UseSqlServer("Data Source=palm.arvixe.com;Initial Catalog=DMChess; Persist Security Info=True;User ID=Noreply;Password=NoReply7789");

            }
        }
        public bool Save()
        {
            try
            {
                SaveChanges();
                //SaveChangesAsync();
            }
            catch (Exception pException)
            //catch (Microsoft.EntityFrameworkCore.)
            //catch (System.Data.Entity.Validation.DbEntityValidationException ex)
            {
                var ex = pException;

                //foreach (var eve in ex.EntityValidationErrors)
                //{
                //    var type = eve.Entry.Entity.GetType().Name;
                //    var state = eve.Entry.State;
                //    foreach (var ve in eve.ValidationErrors)
                //    {
                //        var propertyName = ve.PropertyName;
                //        var ErrorMessage = ve.ErrorMessage;
                //    }
                //}
                //var m = ex;
                throw;
            }
            //SaveChanges();
            return true;
        }
    }
}
