using LeaveManagement.Domains;
using LeaveManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagementDomains
{
    public class EmployeeDomain:BaseDomain
    {
        public void AddEmployee(Employee employee)
        {
            this.ExecuteNonQuery($"insert into employees(EmployeeName,ContactNumber) values('{employee.EmployeeName}','{employee.ContactNumber}')");
        }
        public List<Employee> Get(int employeeId)
        {
            var reader = this.GetReader($"select * from Employees where EmployeeId='{employeeId}'");
            var employees = new List<Employee>();
            while (reader.Read())
            {
                var employee = new Employee();
                employee.EmployeeName = reader.GetString(1);
                employee.ContactNumber = reader.GetString(2);
                employees.Add(employee);
            }
            return employees;
        }
    }
}
