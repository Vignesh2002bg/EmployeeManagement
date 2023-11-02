class DataService {
    async postData(data) {
      // Implement logic to post data to your API or backend
      const response = await fetch('http://localhost:8085/EmployeeFiles/SaveEmployee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }
  
    async fetchData() {
      // Implement logic to fetch data from your API or backend
      const response = await fetch('http://localhost:8085/EmployeeFiles/AllEmployee');
      return response.json();
    }
  
    async deleteData(id) {
      // Implement logic to delete data from your API or backend
      const response = await fetch(`http://localhost:8085/EmployeeFiles/DeleteEmployee/${id}`, {
        method: 'DELETE',
      });
      return response.json();
    }
  }
  
  export default new DataService();
  