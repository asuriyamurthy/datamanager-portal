app.controller('recent_activities_controller',function($scope,$http) {
            var url = "https://localhost:9444/datamanager/recent-activities";
            $scope.recent_activities_html = "<div class=\"mdl-spinner mdl-js-spinner is-active\"></div>";
            $http.get(url).then( function(response) {
               $scope.recentactivities = response.data;
               if($scope.recentactivities.length>0) {
            	   
            	   var htmlscript = "";
            	   for(var i in $scope.recentactivities)
            	   {
            		   if($scope.recentactivities[i].type=="CREDIT") {
		            		   var htmlstr = "<div class=\"step\"><div>" +
		           	   		"<div class=\"circle\">C</div><div class=\"line\"></div></div>" +
		           	   		"<div><div class=\"title\">"+$scope.recentactivities[i].type+" on "+$scope.recentactivities[i].date+"</div>" +
		           	   		"<div class=\"body\">Amount "+$scope.recentactivities[i].type+" &#8377; "+$scope.recentactivities[i].amount+" for "+$scope.recentactivities[i].description+ 
		           	   		"</div></div></div>";
            		   } else if($scope.recentactivities[i].type=="DEBIT") {
            			   var htmlstr = "<div class=\"step\"><div>" +
		           	   		"<div class=\"circle1\">D</div><div class=\"line\"></div></div>" +
		           	   		"<div><div class=\"title\">"+$scope.recentactivities[i].type+" on "+$scope.recentactivities[i].date+"</div>" +
		           	   		"<div class=\"body\">Amount "+$scope.recentactivities[i].type+" &#8377; "+$scope.recentactivities[i].amount+" for "+$scope.recentactivities[i].description+ 
		           	   		"</div></div></div>";
            		   }
            		   htmlscript=htmlscript+htmlstr;
            	   }
            	   $scope.recent_activities_html = htmlscript;	   
            	  
               } else {
            	   $scope.recent_activities_html = "No record(s) to display";  
               }
            }).catch(function(data, status) {
            	 $scope.recent_activities_html = "error";
            });
		 });