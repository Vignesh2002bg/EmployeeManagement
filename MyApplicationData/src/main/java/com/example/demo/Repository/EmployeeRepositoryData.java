package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.UserData;

public interface EmployeeRepositoryData extends JpaRepository<UserData,Long> {

}
