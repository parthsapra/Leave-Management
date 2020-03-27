using LeaveManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagement.Domains
{
    public class LeaveDomain:BaseDomain
    {
        public void AddLeave(Leave leave)
        {
            this.ExecuteNonQuery($"insert into Leaves(EmployeeId,StartDate,EndDate,LeaveDescription) values({leave.EmployeeId},'{leave.StartDate}','{leave.EndDate}','{leave.LeaveDescription}')");
        }

        public List<Leave> GetLeave()
        {
            var reader = this.GetReader($"select * from Leaves");
            var leaves = new List<Leave>();
            while (reader.Read())
            {
                var leave = new Leave();
                leave.LeaveId = reader.GetInt32(0);
                leave.EmployeeId = reader.GetInt32(1);
                leave.StartDate = reader.GetDateTime(2).ToString();
                leave.EndDate = reader.GetDateTime(3).ToString();
                leave.LeaveDescription = reader.GetString(4);
                leaves.Add(leave);
            }
            return leaves;
        }
    }
}
