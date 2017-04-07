(function() {

    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiEndPoint', 'https://davids-restaurant.herokuapp.com/');

    MenuDataService.$inject = ['$http', 'ApiEndPoint'];

    function MenuDataService($http, ApiEndPoint) {
        var service = this;
        service.getAllCategories = function() {
            var foundItems = $http({
                method: 'GET',
                url: (ApiEndPoint + "/categories.json")
            });

            return foundItems;
        };

        service.getItemsForCategory = function(categoryShortName) {
            var foundItems = $http({
                method: 'GET',
                url: (ApiEndPoint + "/menu_items.json?category=" + categoryShortName)
            });
            // console.log(categoryShortName, foundItems);
            return foundItems;
        }

    }

})();
