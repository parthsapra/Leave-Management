using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveManagement.Models;
using LeaveManagementDomains;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LeaveManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
       private EmployeeDomain EmployeeDomain { get; set; }
        public EmployeeController()
        {
            this.EmployeeDomain = new EmployeeDomain();
        }
        [HttpPost]
        public IActionResult Post(Employee employee)
        {
            this.EmployeeDomain.AddEmployee(employee);
            return Ok();
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var employee = this.EmployeeDomain.Get(id);
            return Ok(employee);
        }
    }
}
