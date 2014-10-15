var AppD = angular.module("Directives",[]);

AppD.directive('a', [function(){
    return{
        retrict: 'A',
        link: function(scope, elem, attrs){
            elem.on('click',function(e){
                
                scope.initialize();
            });
        }
    };
}]);

AppD.directive('heightrespond', ['$window', function($window) {
    return {
        link: function(scope, elem, attrs) {
            scope.onResize = function() {
                var header = document.getElementsByTagName('header')[0];
                elem.windowHeight = $window.innerHeight - header.clientHeight;
                $(elem).height(elem.windowHeight);
            };
            scope.onResize();

            angular.element($window).bind('resize', function() {
                scope.onResize();
            });
        }
    };
}]);
