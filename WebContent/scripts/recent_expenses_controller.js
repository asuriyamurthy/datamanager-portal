app.controller('recent_expenses_controller', function($scope,$http) {
	var url = "https://localhost:9444/datamanager/recent-expenses";
	  $http.get(url).then( function(response) {
		  Highcharts.setOptions({
				lang : {
					thousandsSep : ','
				},
				colors : [ '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#64E572',
						'#3F51B5', '#2196F3', '#00BCD4', '#009688', '#4CAF50', '#FF9800',
						'#795548' ]
			});
		
		  
		  Highcharts.chart('container1', {
				chart : {
					type : 'column'
				},
				title : {
					text : ''
				},
				subtitle : {
					text : ''
				},
				xAxis : {
					type : 'category'
				},
				yAxis : {
					min : 0,
					title : {
						text : 'Amount'
					}
				},
				plotOptions : {
					column : {
						colorByPoint : true
					},
					series : {

					}
				},
				legend : {
					enabled : false
				},
				tooltip : {
					useHTML : true,
					pointFormat : '<div> {series.name}: <b> &#x20b9; {point.y}</b></div>'
				},
				series : [ {
					name : 'Expense Amount: ',
					data : response.data,
					dataLabels : {
						enabled : true,
						rotation : -90,
						color : '#FFFFFF',
						align : 'right',
						format : '{point.y}', // one decimal
						y : 10, // 10 pixels down from the top
						style : {
							fontSize : '13px',
							fontFamily : 'Verdana, sans-serif'
						}
					}
				} ]
			});

       }).catch(function(data, status) {
       		$scope.recent_expenses_category='Something went wrong';
       });
});