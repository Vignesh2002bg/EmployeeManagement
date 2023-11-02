package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="EmployeeDataStore")
public class UserData {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String employeename;
	private String employeedob;
	private String city;
	private String state;
	private String position;

}
