using Microsoft.AspNetCore.Components;

namespace ProtoPutin.Components.Pages
{
    public partial class Booking : ComponentBase
    {
        private BookingModel booking = new BookingModel();

        private void HandleValidSubmit()
        {
            // Handle form submission
        }

        public class BookingModel
        {
            public string Name { get; set; } = string.Empty; // Initialize
            public DateTime? Date { get; set; } = DateTime.Now; // Nullable DateTime
        }
    }
}
