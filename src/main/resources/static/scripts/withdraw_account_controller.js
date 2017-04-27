app.controller('withdraw_account_controller',function($scope,$http) {
            var url = "https://localhost:9444/datamanager/withdraw-balance?bankid=1";
            $scope.withdraw_account_tag = "<div class=\"mdl-spinner mdl-js-spinner is-active\"></div>";
            $scope.withdraw_account_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
            $http.get(url).then( function(response) {
               $scope.withdraw = response.data;
               $scope.withdraw_account_tag = "&#8377; "+$scope.withdraw.amountstr+"<br /> Wallet Balance";
               $scope.withdraw_account_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"bankbalance-details?1\">View details</a>";
            }).catch(function(data, status) {
            	 $scope.withdraw_account_tag = "error";
            	 $scope.withdraw_account_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
            });
		 });