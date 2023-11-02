package com.example.demo.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserData;
import com.example.demo.Repository.EmployeeRepositoryData;
import com.example.demo.Service.RequestServiceMain;

@Service
public class RequestServiceImpl implements RequestServiceMain{

	@Autowired
	private EmployeeRepositoryData Repo;
	@Override
	public UserData CreateEmp(UserData emp) {
		
		return Repo.save(emp);
	}

	@Override
	public List<UserData> AllData() {
		List<UserData> AllUser=Repo.findAll();
		return AllUser;
	}

	@Override
	public void EmployeeById(Long departmentId) {
		Repo.deleteById(departmentId);
		
	}

}
