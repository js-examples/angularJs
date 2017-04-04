(function() {

    'use strict';
    angular.module('myApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiEndPoint', 'https://davids-restaurant.herokuapp.com/')
        .directive('foundItems', FoundItems);


    function FoundItems() {
        return {
            restrict: 'AE',
            templateUrl: 'foundItems.html',
            scope: {
                found: '<',
                remove: '&'
            },
        };
    }


    MenuSearchService.$inject = ['$http', 'ApiEndPoint'];

    function MenuSearchService($http, ApiEndPoint) {
        var service = this;

        service.getMatchedMenuItems = function() {
            var foundItems = $http({
                method: 'GET',
                url: (ApiEndPoint + "/menu_items.json")
            });

            return foundItems;
        }
    }


    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var search = this;
        var found = [];
        search.desc = '';

        search.getSearchList = function() {
            var promise = MenuSearchService.getMatchedMenuItems();
            promise.then(function(res) {
                    found = [];
                    var tempStr;
                    if(search.desc!=='')
                       for (var i = 0, length = res.data.menu_items.length; i < length; i++) {
                           tempStr = (res.data.menu_items[i].description).toLowerCase();
                           if (tempStr.indexOf(search.desc.toLowerCase()) >= 0) {
                               found.push(res.data.menu_items[i]);
                           }
                       }
                    search.menuItems = found;
                    search.desc = '';
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        search.removeItem = function(idx){
           found.splice(idx, 1);
        }
    }

})();
