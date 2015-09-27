app.directive('slider', ['$timeout', 'sliderData', function($timeout, sliderData) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: '/js/directives/slider.html',
        link: function(scope, element, attrs) {
            
            scope.sliderClass = 'image1';
            scope.actualImage = 1;
            scope.changeImage = function(n){
                ( n > 3 ) ? n = 1 : n;
                scope.actualImage = n;
                scope.sliderClass = 'image' + n;
                $timeout.cancel(timeout);
                timeout = $timeout(scope.nextSlide, 4000);
            };
            scope.nextSlide = function() {
                scope.changeImage(scope.actualImage + 1);
            };
            var timeout = $timeout(scope.nextSlide, 4000);
            scope.sliderImages = sliderData;
        },

    };
}]);

var a;