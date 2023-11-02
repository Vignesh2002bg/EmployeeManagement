import axios from 'axios';
const API_BASE_URL = 'http://localhost:8085/EmployeeFiles';

class APIService {
  // Create operation
  static async create(data) {
    try {
      const response = await axios.post("http://localhost:8085/EmployeeFiles/SaveEmployee", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Read operation
  static async fetch() {
    try {
      const response = await axios.get(`${API_BASE_URL}/AllEmployee`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Update operation
  static async update(id, data) {
    try {
      const response = await axios.put(`${API_BASE_URL}/update/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Delete operation
  static async delete(id) {
    try {
      await axios.delete(`${API_BASE_URL}/DeleteEmployee/${id}`);
    } catch (error) {
      throw error;
    }
  }
}

export default  APIService;
