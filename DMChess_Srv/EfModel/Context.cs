using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DMChess_Srv.EfModel
{
    public partial class Context : DbContext
    {
        public Context()
        {
        }

        public Context(DbContextOptions<Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Carriers> Carriers { get; set; }
        public virtual DbSet<Friends> Friends { get; set; }
        public virtual DbSet<Games> Games { get; set; }
        public virtual DbSet<Profiles> Profiles { get; set; }
        public virtual DbSet<Tokens> Tokens { get; set; }
        public virtual DbSet<Urls> Urls { get; set; }
        public virtual DbSet<UserGames> UserGames { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:DefaultSchema", "NoReply");

            modelBuilder.Entity<Carriers>(entity =>
            {
                entity.ToTable("Carriers", "dbo");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Mms)
                    .HasColumnName("MMS")
                    .HasMaxLength(32);

                entity.Property(e => e.Name).HasMaxLength(64);

                entity.Property(e => e.Sms)
                    .HasColumnName("SMS")
                    .HasMaxLength(32);
            });

            modelBuilder.Entity<Friends>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.ProfileIdx, e.FriendUserId, e.FriendProfileIdx });

                entity.ToTable("Friends", "dbo");
            });

            modelBuilder.Entity<Games>(entity =>
            {
                entity.ToTable("Games", "dbo");

                entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

                entity.Property(e => e.ChangeDt)
                    .HasColumnName("ChangeDT")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.CreateDt)
                    .HasColumnName("CreateDT")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.EndSts).HasMaxLength(10);

                entity.Property(e => e.LastActionDt)
                    .HasColumnName("LastActionDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.OverDt)
                    .HasColumnName("OverDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.PiecePos)
                    .HasMaxLength(128)
                    .IsUnicode(false);

                entity.Property(e => e.Script).IsUnicode(false);

                entity.Property(e => e.StartDt)
                    .HasColumnName("StartDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.Sts).HasMaxLength(50);

                entity.Property(e => e.TimeInc)
                    .HasMaxLength(16)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Profiles>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.Idx })
                    .HasName("PK_UserProfiles");

                entity.ToTable("Profiles", "dbo");

                entity.HasIndex(e => e.UserIdtextToLower)
                    .HasName("UQ__dProfiles_UserName")
                    .IsUnique();

                entity.Property(e => e.ChangeDt)
                    .HasColumnName("ChangeDT")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.CreateDt)
                    .HasColumnName("CreateDT")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Group)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.GroupToLower)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.NameFirst)
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.NameLast)
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.PhotoBytes).HasColumnType("image");

                entity.Property(e => e.SearchBy)
                    .HasColumnName("Search_By")
                    .HasMaxLength(16)
                    .IsUnicode(false);

                entity.Property(e => e.SearchRatingMax).HasColumnName("Search_RatingMax");

                entity.Property(e => e.SearchRatingMin).HasColumnName("Search_RatingMin");

                entity.Property(e => e.SearchTextGroup)
                    .HasColumnName("SearchText_Group")
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.SearchTextNameFirst)
                    .HasColumnName("SearchText_NameFirst")
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.SearchTextNameLast)
                    .HasColumnName("SearchText_NameLast")
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.SearchTextUserId)
                    .HasColumnName("SearchText_UserId")
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.StartEmailEmail)
                    .HasColumnName("StartEmail_Email")
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.StartEmailNameFirst)
                    .HasColumnName("StartEmail_NameFirst")
                    .HasMaxLength(64)
                    .IsUnicode(false);

                entity.Property(e => e.StartEmailNameLast)
                    .HasColumnName("StartEmail_NameLast")
                    .HasMaxLength(64)
                    .IsUnicode(false);

                entity.Property(e => e.StartParmsOpFindBy)
                    .HasColumnName("StartParms_OpFindBy")
                    .HasMaxLength(10);

                entity.Property(e => e.StartParmsRated).HasColumnName("StartParms_Rated");

                entity.Property(e => e.StartParmsTimeAmt).HasColumnName("StartParms_TimeAmt");

                entity.Property(e => e.StartParmsTimeInc)
                    .HasColumnName("StartParms_TimeInc")
                    .HasMaxLength(1);

                entity.Property(e => e.UserIdtext)
                    .IsRequired()
                    .HasColumnName("UserIDText")
                    .HasMaxLength(256);

                entity.Property(e => e.UserIdtextToLower)
                    .IsRequired()
                    .HasColumnName("UserIDTextToLower")
                    .HasMaxLength(256);
            });

            modelBuilder.Entity<Tokens>(entity =>
            {
                entity.ToTable("Tokens", "dbo");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.ChangeDt)
                    .HasColumnName("ChangeDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.ChangeMod)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.Code)
                    .HasMaxLength(16)
                    .IsUnicode(false);

                entity.Property(e => e.CreateDt)
                    .HasColumnName("CreateDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.CreateMod)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.EmailUserId).HasMaxLength(256);

                entity.Property(e => e.Ipaddress)
                    .HasColumnName("IPAddress")
                    .HasMaxLength(128)
                    .IsUnicode(false);

                entity.Property(e => e.Msg)
                    .HasMaxLength(64)
                    .IsUnicode(false);

                entity.Property(e => e.Urlid).HasColumnName("URLId");
            });

            modelBuilder.Entity<Urls>(entity =>
            {
                entity.ToTable("Urls", "dbo");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Action)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.ChangeDt)
                    .HasColumnName("ChangeDT")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.CreateDt)
                    .HasColumnName("CreateDT")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Paypal)
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.Route)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.View)
                    .HasMaxLength(32)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserGames>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.ProfileIdx, e.GameId });

                entity.ToTable("UserGames", "dbo");

                entity.Property(e => e.ChangeDate).HasColumnType("datetime");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.FUrlparmId).HasColumnName("fURLParmId");

                entity.Property(e => e.GameName)
                    .IsRequired()
                    .HasMaxLength(25);

                entity.Property(e => e.Iwon).HasColumnName("IWon");

                entity.Property(e => e.Sts)
                    .IsRequired()
                    .HasMaxLength(12);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("Users", "dbo");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.ChangeDt)
                    .HasColumnName("ChangeDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.CreateDt)
                    .HasColumnName("CreateDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.EmailAddress)
                    .IsRequired()
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.EmailAddressToLower)
                    .IsRequired()
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.EmailConfirmCode)
                    .IsRequired()
                    .HasMaxLength(16)
                    .IsUnicode(false);

                entity.Property(e => e.LastActivityDt)
                    .HasColumnName("LastActivityDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.MembershipExpiration).HasColumnType("datetime");

                entity.Property(e => e.MembershipLevel)
                    .IsRequired()
                    .HasMaxLength(16)
                    .IsUnicode(false);

                entity.Property(e => e.OptsAudioOn).HasColumnName("Opts_AudioOn");

                entity.Property(e => e.OptsClockShow).HasColumnName("Opts_ClockShow");

                entity.Property(e => e.OptsEmailAlerts).HasColumnName("Opts_EmailAlerts");

                entity.Property(e => e.OptsPhoneAlerts).HasColumnName("Opts_PhoneAlerts");

                entity.Property(e => e.OptsPostToFacebook).HasColumnName("Opts_PostToFacebook");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.PasswordToLower)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.PhoneCarrier)
                    .HasMaxLength(16)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneConfirmCode)
                    .HasMaxLength(16)
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasMaxLength(16)
                    .IsUnicode(false);
            });
        }
    }
}
