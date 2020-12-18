package com.em.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.em.model.Employee;




public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	Employee findByName(String name);
}