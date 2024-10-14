using ProtoPutin.Models;
using Microsoft.EntityFrameworkCore;


namespace ProtoPutin.Services
{
    public class CustomerService
    {
        private readonly TlS2303831RzaContext _context;

        public CustomerService(TlS2303831RzaContext context)
        {
            _context = context;
        }
    }
}
