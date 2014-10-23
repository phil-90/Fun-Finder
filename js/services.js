var AppS = angular.module("Services", []);

AppS.factory("getStyleService",['$http', function($http){
    return{
        get: function(callback){
            $http.get('data/json/styles.json').success(function(data){
                callback(data);
            });
        }
    };
}]);

AppS.factory("initService",[ function(){
        return{
            mapInit:  function(marker){
                var rendererOptions = {
                    suppressMarkers : true
                  };
                directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
                directionsService = new google.maps.DirectionsService();
                var styles = [
                  {
                    "featureType": "landscape",
                    "stylers": [
                      { "color": "#333333" },
                      { "visibility": "simplified" }
                    ]
                  },{
                    "featureType": "poi",
                    "stylers": [
                      { "color": "#030303" }
                    ]
                  },{
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      { "color": "#424242" },
                      { "visibility": "simplified" }
                    ]
                  },{
                    "featureType": "road",
                    "elementType": "labels.text",
                    "stylers": [
                      { "weight": 0.6 },
                      { "color": "#FFFFFF" }
                    ]
                  },{
                    "featureType": "transit",
                    "stylers": [
                      { "visibility": "simplified" },
                      { "saturation": 100 }
                    ]
                  }
                ];
                var mapOptions = {
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    panControl: false,
                    disableDefaultUI: true,
                    styles: styles,
                    mapTypeControl: false
                };
                map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(document.getElementById('directions-panel'));
                if (navigator.geolocation){
                   navigator.geolocation.getCurrentPosition(function(position){
                        pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                        infowindow = new google.maps.InfoWindow({map: map,position: pos,content: 'You Are Here!'});
                        var request = {location:pos,radius:5000,types: [marker]};
                        map.setCenter(pos);
                        infowindow = new google.maps.InfoWindow();
                        service = new google.maps.places.PlacesService(map);
                        service.nearbySearch(request,callback);
                    }, 
                    function(){ 
                        handleNoGeolocation(true);
                    });
                    } 
                    else{
                        handleNoGeolocation(false);
                    }
                function callback(results, status){
                  if (status === google.maps.places.PlacesServiceStatus.OK){
                    for (var i = 0; i < results.length; i++){
                      createMarker(results[i]);
                    }
                  }
                }
                function createMarker(place){
                  var placeLoc = place.geometry.location;
                  var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: 'img/22logo.png'
                  });
                var request = { reference: place.reference };
                service.getDetails(request, function(details, status) {
                    google.maps.event.addListener(marker, 'click', function(){
                        if(details === null){
                            details === undefined;
                        }
                        infowindow.setContent(place.name + "<br/>");
                        infowindow.open(map, this);
                        calcRoute(place.geometry.location);
                        document.getElementById("placeLink").href = "" + details.website + "";
                    });    
                });
            }
            function calcRoute(address) {
                var start = latlng;
                var end = address;
                var request = {
                  origin:start,
                  destination:end,
                  travelMode: google.maps.TravelMode.DRIVING
                };
                    directionsService.route(request, function(result, status) {
                      if (status === google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(result);
                      }
                    });
            }
        }
    };
}]);

AppS.factory('weatherService', ['$http', '$q', function ($http, $q){
      function getWeather (zip) {
        var deferred = $q.defer();
        $http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + zip + '%22&format=json&diagnostics=true&callback=')
          .success(function(data){
            deferred.resolve(data.query.results.channel);
          })
          .error(function(err){
            console.log('Error retrieving markets');
            deferred.reject(err);
          });
        return deferred.promise;
      }
      return {
        getWeather: getWeather
      };
    }]);

AppS.factory('MailService',['$http', function($http){
    return{
        send:function(data){
            var $promise = $http({
                    method: 'POST',
                    url : 'data/php/mail.php',
                    transformRequest: function(data) {
                        var str = [];
                        for(var p in data)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
                        return str.join("&");
                    },
                    data: data,
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                });
                    $promise.then(function(msg){
                        var uid = msg.data;
                        if(msg.data == 'success'){
                            alert('whatever');
                        }else{
                            console.log('FAIL login');
                        }
                    });
            }
    };
}]);
