package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserData;
import com.example.demo.Service.RequestServiceMain;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("EmployeeFiles")
public class ControllerPage {
	
	@Autowired
	private RequestServiceMain Service;
	
	@PostMapping("/SaveEmployee")
	public UserData SaveData(@RequestBody UserData emp)
	{
		return Service.CreateEmp(emp);
	}
	@GetMapping("/AllEmployee")
	public List<UserData> AllEmployee()
	{
		return Service.AllData();
		
	}
	@DeleteMapping("/DeleteEmployee/{id}")
	 
    public String deleteDepartmentById(@PathVariable("id")
                                       Long departmentId)
    {
        Service.EmployeeById(
            departmentId);
        return "Deleted Successfully";
    }
}
