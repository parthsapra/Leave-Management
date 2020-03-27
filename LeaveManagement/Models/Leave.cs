namespace LeaveManagement.Models
{
    public class Leave
    {
        public int LeaveId { get; set; }
        public int EmployeeId { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string LeaveDescription { get; set; }
    }
}
