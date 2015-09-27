var app = angular.module('myApp', []);

app.filter('BreakFilter', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text ? text.replace(/\n/g, '<br />') : '');
        };
}]);