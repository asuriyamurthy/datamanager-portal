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
		data : [ {
			"y" : 1234.23,
			"name" : "01-Jan-2017"
		}, {
			"y" : 1323.32,
			"name" : "02-Jan-2017"
		}, {
			"y" : 1391.11,
			"name" : "03-Jan-2017"
		}, {
			"y" : 1309.11,
			"name" : "04-Jan-2017"
		}, {
			"y" : 1433.90,
			"name" : "05-Jan-2017"
		} ],
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
		data : [ {"name":"Hotels and Restarants","y":23445.02}, {"name":"Loan & EMI","y":22435.18} ]
	} ]
});

Highcharts.chart('container2', {
	chart : {
		type : 'line'
	},
	title : {
		text : ''
	},
	tooltip : {
		useHTML : true,
		pointFormat : '<div> {series.name}: <b> &#x20b9; {point.y}</b></div>'
	},
	xAxis : {
		categories : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ]
	},
	yAxis : {
		title : {
			text : 'Amount'
		}
	},
	plotOptions : {
		line : {
			dataLabels : {
				enabled : true
			},
			enableMouseTracking : true
		}
	},
	series : [ {
		name : 'CREDIT',
		data : [ 1059.45, 1036.9, 1099.5, 1914.5, 1918.4, 1821.5 ],
		color : '#00BCD4'
	}, {
		name : 'DEBIT',
		data : [ 956.9, 943.2, 845.7, 901.5, 1021.9, 1200.2 ],
		color : '#4A148C'
	} ]
});