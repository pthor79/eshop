using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class User: IdentityUser<int> //int replace type of id from string (this is default type in UserIdentity) to int
    { 
        public UserAddress Address { get; set; }
    }
}