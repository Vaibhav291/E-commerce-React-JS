using Ecommerce.Backend.Models;

namespace Ecommerce.Backend.Services
{
    public interface IUserService
    {
        Task<bool> RegisterAsync(RegisterDto dto);
        Task<string> LoginAsync(LoginDto dto);
    }
}
