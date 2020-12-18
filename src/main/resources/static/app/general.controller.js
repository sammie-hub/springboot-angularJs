angular.module("crudApp").controller("GeneralController", GeneralController);

GeneralController.inject = [ '$scope', 'EmployeeService' ];

function GeneralController($scope, EmployeeService) {
	
	$scope.employees = EmployeeService.query();

	$scope.employee = {};
	
	$scope.buttonText="Submit";
	
	$scope.saveEmployee = function() {
		if ($scope.employee.id !== undefined) {
			EmployeeService.update($scope.employee, function() {
				$scope.employees = EmployeeService.query();
				$scope.employee = {};
				$scope.buttonText="Submit";
			});
		} else {
			EmployeeService.save($scope.employee, function() {
				$scope.employees = EmployeeService.query();
				$scope.employee = {};
			});
		}
	}

	$scope.updateEmployeeInit = function(employee) {
		$scope.buttonText="Update";
		$scope.employee = employee;
	}

	$scope.deleteEmployee = function(employee) {
		employee.$delete({id: employee.id}, function() {
			$scope.employees = EmployeeService.query();
		});
	}
}