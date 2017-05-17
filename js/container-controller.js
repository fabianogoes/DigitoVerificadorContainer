var app = angular.module("mainApp", []);
app.controller("ContainerController",  ['$scope', function($scope){
    var self = this;

    self.calculate = function(){     

        if(self.codigo == null){
            return;
        }

        var container = new Container();
        
        self.isValid = container.validate(self.codigo);
        if(self.isValid == null){
            self.resultCalc = container.calculate(self.codigo);   
            self.message = self.codigo + " = " + self.resultCalc;       
        }
    }

}]);