(function() {

    'use strict';
    var myApp = angular.module('myApp', []);

    myApp.controller('myController', myController);
    myController.$inject = ['$scope'];

    function myController($scope) {

        Array.prototype.removeEmptyString = function() {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === '')
                    this.splice(i--, 1);
            }
        };

        var food = [];
        $scope.lunch = '';

        $scope.check = function() {
            food = ($scope.lunch).split(',');
            food.removeEmptyString();
            if (food.length === 0)
                $scope.message = 'Please enter data first';
            else
                $scope.message = (food.length > 3) ? 'Too much!' : 'Enjoy!';
        };
    }

})();
