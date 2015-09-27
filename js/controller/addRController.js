app.controller('addRController', ['$scope', function($scope) {
    $scope.etapes = [];
    
    $scope.addEtape = function() {
        $scope.etapes.push($scope.etape);
        $scope.etape = "";
    };
    
}]);