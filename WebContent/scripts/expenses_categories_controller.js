app.controller('expenses_categories_controller', function($scope,$http) {
	var url = "https://localhost:9444/datamanager/expenses-categories";
	  $http.get(url).then( function(response) {
		  Highcharts.setOptions({
				lang : {
					thousandsSep : ','
				},
				colors : [ '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#64E572',
						'#3F51B5', '#2196F3', '#00BCD4', '#009688', '#4CAF50', '#FF9800',
						'#795548' ]
			});
		  
		  Highcharts.chart('container', {
				chart : {
					type : 'pie',
					options3d : {
						enabled : true,
						alpha : 45,
						beta : 0
					}
				},
				title : {
					text : ''
				},
				tooltip : {
					useHTML : true,
					pointFormat : '<div> {series.name}: <b> &#x20b9; {point.y}</b></div>'
				},
				plotOptions : {
					pie : {
						allowPointSelect : true,
						cursor : 'pointer',
						depth : 35,
						innerSize : 70,
						dataLabels : {
							enabled : true,
							format : '{point.name}'
						},
						showInLegend : true
					}
				},
				series : [ {
					type : 'pie',
					name : 'Expense Amount: ',
					data : response.data
				} ]
			});

       }).catch(function(data, status) {
       		$scope.expenses_controller_category='Something went wrong';
       });
});


