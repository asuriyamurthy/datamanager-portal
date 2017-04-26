app.controller('outstanding_expenses_controller',function($scope,$http) {
            var url = "https://localhost:9444/datamanager/outstanding-amount";
            $scope.outstanding_tag = "<div class=\"mdl-spinner mdl-js-spinner is-active\"></div>";
            $scope.outstanding_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
            $http.get(url).then( function(response) {
               $scope.outstandingamount = response.data;
               $scope.outstanding_tag = "&#8377; "+$scope.outstandingamount.outstanding_amount_str+"<br /> Outstanding Amount";
               $scope.outstanding_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"outstanding-amount-details\">View details</a>";
            }).catch(function(data, status) {
            	 $scope.outstanding_tag = "error";
            	 $scope.outstanding_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
            });
		 });