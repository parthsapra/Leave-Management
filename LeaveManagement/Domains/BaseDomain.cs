using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagement.Domains
{
    public abstract class BaseDomain
    {
        private SqlConnection SqlConnection { get; set; }
        protected SqlCommand SqlCommand { get; set; }
        public BaseDomain()
        {
            this.SqlConnection = new SqlConnection("Data Source=Parth\\SQLEXPRESS;Initial Catalog=LeaveManagementDb;Integrated Security=True");
            this.SqlConnection.Open();
        }
        public SqlDataReader GetReader(string commandText)
        {
            this.SqlCommand = new SqlCommand(commandText, this.SqlConnection);
            return this.SqlCommand.ExecuteReader();
        }
        public void ExecuteNonQuery(string commandText)
        {
            this.SqlCommand = new SqlCommand(commandText, this.SqlConnection);
            this.SqlCommand.ExecuteNonQuery();
        }
        public void CloseConnection()
        {
            this.SqlConnection.Close();
        }
    }
}
