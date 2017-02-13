(function() {

    'use strict';
    var myApp = angular.module('myApp', []);

    myApp.controller('myController', myController);
    myController.$inject = ['$scope'];
    function myController($scope) {

      // Empty string between commas are ignored/deleted
        Array.prototype.removeEmptyString = function() {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === '')
                    this.splice(i--, 1);
            }
        };
      //////////////////////////////////////////////////

        var food = [];
        $scope.color = 'black';
        $scope.lunch = '';

        $scope.check = function() {
            food = ($scope.lunch).split(',');
            food.removeEmptyString();
            if (food.length === 0){
                $scope.color = 'red';
                $scope.message = 'Please enter data first';
            }
            else{
                $scope.color = 'green';
                $scope.message = (food.length > 3) ? 'Too much!' : 'Enjoy!';
            }
        };
    }

})();
