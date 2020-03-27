using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveManagement.Models;
using LeaveManagement.Domains;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LeaveManagementApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LeaveController : ControllerBase
    {
       private LeaveDomain LeaveDomain{ get; set; }
        public LeaveController()
        {
            this.LeaveDomain = new LeaveDomain();
        }
        [HttpPost]
        public IActionResult Post(Leave leave)
        {
            this.LeaveDomain.AddLeave(leave);
            return Ok();
        }
        [HttpGet]
        public IActionResult Get()
        {
            var leave = this.LeaveDomain.GetLeave();
            return Ok(leave);
        }
    }
}
