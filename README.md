# springboot-angularJs

http://employeemanagementappname-env.eba-ffw2ewfh.us-east-2.elasticbeanstalk.com/

The Application named Employee Management has been developed using Angular 8 and Java Spring Boot 2.4.1. 

## Server Side Technologies
- Spring Boot 2.4.1
- JDK 1.8
- Maven v8
## Front End Technologies
- Angular 8.0
- BootStrap 4

## Java Files
- EmployeeManagementApplication.class:- It is a main class with @SpringBootApplication annotation which will enable spring-boot auto-configuration feature
- EmployeeResource.class:- A controller to accept all the http requests with mapping /api
- Employee.class:- A Entity(or table) with general employee fields.
- EmployeeRepository.class:- It extends JPA Repository inbuilt class.
- EmployeeService.class:- It is service using an singleton instance of EmployeeRepository.class to perform CRUD operation.

## Property Files
- application.properties:- It defines database environment variables
- buildspec.yml - It contains all the maven build commands to deploy application on AWS Elastic BeanStalk

### Angular Scripts
- script.js:- It defines modules, services and controllers

### Front-end Files
- addEmployee.html, employeeDetails.html, employees.html, listEmployee.html, updateEmployee.html
- bootstrap.css, styles.css

## Architecture

![Flowchart](https://user-images.githubusercontent.com/61722596/102675632-264e4500-4168-11eb-82f5-5ba446fe9f71.png)


## Functionality

### Add Employee
![image](https://user-images.githubusercontent.com/61722596/102672911-319d7280-4160-11eb-9ff8-df13ee764873.png)

### List Employee
![image](https://user-images.githubusercontent.com/61722596/102673072-a375bc00-4160-11eb-96ac-12160a6ae307.png)

### Employee Details
![image](https://user-images.githubusercontent.com/61722596/102673177-12531500-4161-11eb-97c7-3207473e53f0.png)

### Update Employee Details
![image](https://user-images.githubusercontent.com/61722596/102673200-272fa880-4161-11eb-9748-ec5210607f81.png)


## Deployment Process

The application is deployed on AWS.
 ### AWS Services Used:
 - Elastic BeanStalk
 - RDS (Relational Database Service)
 - Code Pipeline with Code Build Service
 
## Deployment Architecture

![Flowchart-1](https://user-images.githubusercontent.com/61722596/102677312-d96e6c80-416f-11eb-8d74-842438c607a0.png)

### AWS Code Pipeline
![Screenshot (175)](https://user-images.githubusercontent.com/61722596/102676779-269d0f00-416d-11eb-8f6e-2e8363e42914.png)
![Screenshot (176)](https://user-images.githubusercontent.com/61722596/102676778-26047880-416d-11eb-8b0e-f939b9c6c61b.png)
