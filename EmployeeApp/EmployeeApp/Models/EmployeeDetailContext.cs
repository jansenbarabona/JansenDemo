using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeApp.Models
{
    public class EmployeeDetailContext:DbContext
    {
        public EmployeeDetailContext(DbContextOptions<EmployeeDetailContext >options):base(options)
        {}
        public DbSet<EmployeeDetails> EmployeeDetails { get; set; }
    }
}
