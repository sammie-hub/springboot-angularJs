//angular.module('crudApp').factory('Employee', Employee); // It can also be written in below line also.
app.factory('EmployeeService', Employ); // The app object is defined in app.js. It means that the module 
//is creating a custom service using .factory method which is getting called in genral.controller 

Employ.$inject = [ '$resource' ];

function Employ($resource) {
	var resourceUrl = 'api/employee/:id';

	return $resource(resourceUrl, {}, {
		'update' : {
			method : 'PUT'
		}
	});
}