using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeApp.Models
{
    public class EmployeeDetails
    {
        [Key]
        public int EmployeeId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
     
        public string EmployeefirstName{ get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string EmployeeLasttName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string EmployeeMidleName { get; set; }
        [Required]
        [Column(TypeName = "varchar(7)")]
        public string HiringDate { get; set; }
    }
}
