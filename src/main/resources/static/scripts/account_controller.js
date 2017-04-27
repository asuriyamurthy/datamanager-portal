app.controller('account_controller',function($scope,$http) {
            var url = "https://localhost:9444/datamanager/account";
            $scope.balance_tag = "<div class=\"mdl-spinner mdl-js-spinner is-active\"></div>";
            $scope.income_tag = "<div class=\"mdl-spinner mdl-js-spinner is-active\"></div>";
            $scope.expense_tag = "<div class=\"mdl-spinner mdl-js-spinner is-active\"></div>";
            $scope.balance_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
            $scope.expense_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
            $scope.income_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
            $http.get(url).then( function(response) {
               $scope.account = response.data;
               $scope.balance_tag = "&#8377; "+$scope.account.balance+"<br /> Balance";
               $scope.income_tag = "&#8377; "+$scope.account.total_credit+"<br /> Total Income";
               $scope.expense_tag = "&#8377; "+$scope.account.total_expenses+"<br /> Total Expenses";
               $scope.balance_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"statements\">View Statements</a>";
               $scope.expense_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\">Expense Analysis</a>";
               $scope.income_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\">Financial Summary</a>";
            }).catch(function(data, status) {
            	 $scope.balance_tag = "error";
            	 $scope.income_tag = "error";
            	 $scope.expense_tag = "error";
            	 $scope.balance_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
                 $scope.expense_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
                 $scope.income_anchor_tag = "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"javascript:void(0)\"></a>";
            });
		 });