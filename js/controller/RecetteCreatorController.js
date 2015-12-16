app.controller('RecetteCreatorController', ['$scope', function($scope) {

    $scope.ingredients = [];
    
    $scope.remove = function(index) {
        $scope.ingredients.splice(index, 1);
    }
    
    $scope.add = function(text) {
        $scope.ingredients.push(text);
        $scope.inputIngredient = "";
    }
    
    $scope.inputIngredient = "";
    
    $scope.etapes = "Text exemple";
    
    $scope.Betapes = false;
    $scope.setEtapes = function(text) {
        $scope.etapes = text;
    }
    
    $scope.Bpresentation = true;
    
    $scope.imgLink = "image-presentation.png";
    $scope.nbPersonne = 0;
    $scope.tmpRepos = 0;
    $scope.tmpCuisson = 0;
    $scope.tmpTotal = 0;
    $scope.lvl = 1;
    $scope.materiel = "";
    
    $scope.heartGen = function() {
        var res = "";
        for(i = 0; i < 5; i++) {
            if(i < $scope.lvl)
                res += " [ ";
            else
                res += " ] ";
        }
        return res;
    }
                
    
    $scope.Btitle = true;
    
    $scope.titleImg = "titre-recette.png";
    
    $scope.Bvignette = true;
    
    $scope.vignettes = [];
    $scope.inputVignette = "";
    $scope.removeVignette = function(index) {
        $scope.vignettes.splice(index, 1);
    }
    $scope.addVignette = function() {
        if($scope.inputVignette != ""){
            $scope.vignettes.push($scope.inputVignette);
            $scope.inputVignette = "";
        }
        $scope.Bvignette = true;
    }
    
}]);