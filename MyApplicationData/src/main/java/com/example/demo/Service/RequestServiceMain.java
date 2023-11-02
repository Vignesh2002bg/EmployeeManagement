package com.example.demo.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserData;

@Service
public interface RequestServiceMain {

	//Insert
	public UserData CreateEmp(UserData emp);
	
	//Fetch
	public List<UserData> AllData();
	
	//Delete
	public void EmployeeById(Long departmentId);

}
