var AppC = angular.module("Controllers",[]);

AppC.controller("MainCtrl",['$scope','weatherService', 'initService',
        function($scope, weatherService, initService){
        if(!navigator.geolocation) return;
	navigator.geolocation.getCurrentPosition(function(pos) {
		geocoder = new google.maps.Geocoder();
		 latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
		geocoder.geocode({'latLng': latlng}, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				var result = results[0];
				var city = "";
				var state = "";
                                var postal = "";
				for(var i=0, len=result.address_components.length; i<len; i++) {
					var ac = result.address_components[i];
					if(ac.types.indexOf("locality") >= 0) city = ac.long_name;
					if(ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
                                        if(ac.types.indexOf("postal_code") >= 0) postal = ac.long_name;
                                        
				}
				//only report if we got Good Stuff
				if(city !== '' && state !== '') {
                                    $scope.result= "Hello to you out there in "+city+", "+state+"!";
				
                                        fetchWeather(postal);
				}
			}
		});
	});

    function fetchWeather(zip) {
        weatherService.getWeather(zip).then(function(data){
          $scope.place = data;
        }); 
    }
    
    var infowindow, map, pos;
    $scope.marker = '';
    $scope.changemarker = function(change){
        $scope.marker = change;
    };
    
    $scope.initialize = function(){
        initService.mapInit($scope.marker);
    };
    
    $scope.showLink = function(){
        var link = document.getElementById("placeLink").href;
            if(link === '/undefined' || link === 'http://superfunfinder.com/#/' || link === null){
                $scope.linker = false;
                
            }else{
                $scope.linker = true;
            }
            
    };
 
}]);
