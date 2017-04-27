app.controller('bank_account_controller',function($scope,$http) {
            var url = "https://localhost:9444/datamanager/bank-balance?bankid=1";
            $scope.bank_account_tag = "<div class=\"mdl-spinner mdl-js-spinner is-active\"></div>";
            $scope.bank_account_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
            $http.get(url).then( function(response) {
               $scope.bankaccount = response.data;
               $scope.bank_account_tag = "&#8377; "+$scope.bankaccount.amountstr+"<br /> Bank Balance";
               $scope.bank_account_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"bankbalance-details?1\">View details</a>";
            }).catch(function(data, status) {
            	 $scope.bank_account_tag = "error";
            	 $scope.bank_account_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
            });
		 });