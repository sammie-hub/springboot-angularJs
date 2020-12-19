var appEmployee = angular
		.module("EmployeeModule", [ 'ngResource', 'ngRoute' ])
		.factory('EmployeeService', [ '$resource', function Employ($resource) {
			var resourceUrl = 'api/employee/:id';

			return $resource(resourceUrl, {}, {
				'update' : {
					method : 'PUT'
				}
			});

		} ])
		.config(function($routeProvider, $locationProvider) {
			$routeProvider.when("/aEmp", {
				templateUrl : "Templates/addEmployee.html",
				controller : "homeController"
			}).when("/lEmp", {
				templateUrl : "Templates/listEmployee.html",
				controller : "employeesController"
			}).when("/employees", {
				templateUrl : "Templates/employees.html",
				controller : "employeesController"
			}).when("/details", {
				templateUrl : "Templates/employeeDetails.html",
				controller : "employeeDetailsController"
			}).when("/uEmp", {
				templateUrl : "Templates/updateEmployee.html",
				controller : "employeeDetailsController"
			}).otherwise({
				redirectTo : "/lEmp"
			})
			$locationProvider.html5Mode(true);
		})
		.controller(
				"employeesController",
				[
						'$scope',
						'EmployeeService',
						'$rootScope',
						'$http',
						'$location',
						function($scope, EmployeeService, $rootScope, $http,
								$location, $route, $promise, $routeParams) {
							$scope.employees = EmployeeService.query();
							$scope.employee = {};

							$scope.message = "";

							$scope.rowLimit = 5;
							$scope.sortColumn = "name";
							$scope.reloadData = function() {
								$route.reload();
							}
							$scope.reverseSort = false;
							$scope.sortData = function(column) {
								$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort
										: false;
								$scope.sortColumn = column;
							}
							$scope.getSortClass = function(column) {

								if ($scope.sortColumn == column) {
									return $scope.reverseSort ? 'arrow-down'
											: 'arrow-up';
								}
								return '';
							}

							$scope.saveEmployee = function() {

								if ($scope.employee.id !== undefined) {

								} else {
									EmployeeService
											.save(
													$scope.employee,
													function() {
														$scope.employees = EmployeeService
																.query();
														$scope.employee = {};
													}).$promise
											.then(
													function(result,
															responseHeaders) {
														$scope.users = result;
														$scope.message = "Details saved successfully";
													},
													function(httpResponse) {
														$scope.message = "Error occurred!";
													})
								}
							}
							$scope.listEmployee = function(employee) {
								$scope.employee = employee;
								$rootScope.employeeD = employee;
							}

							$scope.updateEmployeeInit = function(employee) {
								$scope.employee = employee;
								$rootScope.employeeD = employee;
								$location.path('uEmp');
							}
							$scope.updateEmployee = function() {
								EmployeeService.update($scope.employeeD,
										function() {
											$scope.employees = EmployeeService
													.query();
											$scope.employee = {};
											$location.path('lEmp');
										}).$promise.then(function(result,
										responseHeaders) {
									alert("Details Updated Successfully");
								}, function(httpResponse) {
									alert("Error Occurred");
								});
							}

							$scope.deleteEmployee = function(employee) {
								$http({

									method : 'DELETE',
									url : '/api/employee/' + employee.id

								}).then(function successCallback(response) {

									alert("User deleted Successfully");
									$scope.employees = EmployeeService.query();
									$scope.employeeD = {};
									$location.path('lEmp');
								});
								// employee.$delete({id: employee.id},
								// function() {
								// $scope.employees = EmployeeService.query();
								// });
							}
							$scope.employeeDetails = function(employee) {
								$scope.buttonText = "Update";
								$scope.employee = employee;
							}
						} ]).controller(
				"employeeDetailsController",
				[
						'$scope',
						'EmployeeService',
						'$rootScope',
						function($scope, EmployeeService, $rootScope,
								$routeParams) {
							$scope.message = "Employee Details";
							$scope.employeeD = $rootScope.employeeD;
						} ]);