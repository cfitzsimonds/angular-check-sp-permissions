'use strict';

permissionsApp.controller('PermissionsController',
	function PermissionsController($scope, $http) {

		$scope.response = {};

		$scope.send = function(request) {
			
			let restUrl = request.url + "/_api/web/lists/getbytitle('" + request.listName + "')/getusereffectivepermissions(@u)?@u='" + encodeURIComponent(request.userName) + "'";
			//alert(restUrl);

			//make the json call
	        $http.get(restUrl).then((response) => {
	        		alert('success');
	                //if we have dont have a null response attach the entries to the scope
	                if (response !== null) {

	                } else {
	                    //show an error if response is null
	                }

	            },

	            //promise error handler for safety, haven't seen it hit here though
	            (err) => {

	                alert('Error: ' + err);

	            });

				$scope.response = angular.copy(request);
			};

	}
);