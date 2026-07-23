using System.ComponentModel.DataAnnotations;

namespace ReactCoreApp.Server.Models
{
    public class OrdersDetails
    {
        // Static in-memory data store (replace with database in production).
        public static List<OrdersDetails> order = new List<OrdersDetails>();

        // Default constructor.
        public OrdersDetails()
        {
        }

        // Parameterized constructor for easy object creation.
        public OrdersDetails(int OrderID, string CustomerId, string CustomerName, int EmployeeId, string EmployeeName,
            double OrderAmount, double Freight, string Status, bool Verified, DateTime OrderDate, 
            string ShipCity, string ShipName, string ShipCountry, DateTime ShippedDate, string ShipAddress)
        {
            this.OrderID = OrderID;
            this.CustomerID = CustomerId;
            this.CustomerName = CustomerName;
            this.EmployeeID = EmployeeId;
            this.EmployeeName = EmployeeName;
            this.OrderAmount = OrderAmount;
            this.Freight = Freight;
            this.Status = Status;
            this.Verified = Verified;
            this.OrderDate = OrderDate;
            this.ShipCity = ShipCity;
            this.ShipName = ShipName;
            this.ShipCountry = ShipCountry;
            this.ShippedDate = ShippedDate;
            this.ShipAddress = ShipAddress;
        }

        /// <summary>
        /// Generates sample order data. In production, replace with database query.
        /// </summary>
        public static List<OrdersDetails> GetAllRecords()
        {
            if (order.Count() == 0)
            {
                int code = 10001;
                string[] customers = { "ALFKI", "ANATR", "ANTONIO", "AROUT", "BERGS", "BLAUS", "BLONP", "BOLID", "BONAP", "BSBEV" };
                string[] customerNames = { "Alfreds Futterkiste", "Ana Trujillo Emparedados y helados", "Antonio Moreno Taquería", 
                    "Around the Horn", "Berglunds snabbkøp", "Blauer See Delikatessen", "Blondesddsl père et fils", 
                    "Bolido Comidas preparadas", "Bon App", "B's Beverages" };
                string[] employees = { "Nancy Davolio", "Andrew Fuller", "Janet Leverling", "Margaret Hammersley", "Steven Buchanan",
                    "Michael Suyama", "Robert King", "Laura Callahan", "Anne Dodsworth" };
                string[] statuses = { "Pending", "Processing", "Shipped", "Delivered", "Cancelled" };
                string[] cities = { "Berlin", "Madrid", "São Paulo", "London", "Stockholm", "Vienna", "Paris", "Amsterdam", "Brussels", "Munich" };
                string[] countries = { "Germany", "Spain", "Brazil", "UK", "Sweden", "Austria", "France", "Netherlands", "Belgium" };

                Random random = new Random();

                for (int i = 0; i < 150; i++)
                {
                    int customerIndex = random.Next(customers.Length);
                    int employeeIndex = random.Next(employees.Length);
                    int statusIndex = random.Next(statuses.Length);
                    int cityIndex = random.Next(cities.Length);
                    
                    DateTime orderDate = DateTime.Now.AddDays(-random.Next(180));
                    DateTime shippedDate = orderDate.AddDays(random.Next(1, 15));
                    
                    order.Add(new OrdersDetails(
                        code + i,
                        customers[customerIndex],
                        customerNames[customerIndex],
                        employeeIndex + 1,
                        employees[employeeIndex],
                        Math.Round(500 + (random.NextDouble() * 5000), 2),
                        Math.Round(10 + (random.NextDouble() * 500), 2),
                        statuses[statusIndex],
                        random.Next(100) > 40,
                        orderDate,
                        cities[cityIndex],
                        "Shipping Dept",
                        countries[cityIndex % countries.Length],
                        shippedDate,
                        $"{random.Next(1000, 9999)} Main Street"
                    ));
                }
            }
            return order;
        }

        // Properties with validation attributes.
        [Key]
        public int? OrderID { get; set; }

        public string? CustomerID { get; set; }

        public string? CustomerName { get; set; }

        public int? EmployeeID { get; set; }

        public string? EmployeeName { get; set; }

        public double? OrderAmount { get; set; }

        public double? Freight { get; set; }

        public string? Status { get; set; }

        public bool Verified { get; set; }

        public DateTime? OrderDate { get; set; }

        public string? ShipCity { get; set; }

        public string? ShipName { get; set; }

        public string? ShipCountry { get; set; }

        public DateTime? ShippedDate { get; set; }

        public string? ShipAddress { get; set; }
    }
}