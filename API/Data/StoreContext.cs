using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using API.Entities.OrderAggregate;

namespace API.Data
{
    public class StoreContext: IdentityDbContext<User, Role, int> //int replace type of id from string (this is default type in UserIdentity) to int
    {
        public StoreContext(DbContextOptions options): base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Basket> Baskets { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>()
                .HasOne(a => a.Address)
                .WithOne() //one to one relationship
                .HasForeignKey<UserAddress>(a => a.Id) //foreign key
                .OnDelete(DeleteBehavior.Cascade); //if user is deleted, address is deleted too

            //identity role was replaced by role
            builder.Entity<Role>()
                .HasData(
                    new Role { Id=1, Name = "Admin", NormalizedName = "ADMIN" },
                    new Role { Id=2, Name = "Member", NormalizedName = "MEMBER" }
                );
        }
    }
} 