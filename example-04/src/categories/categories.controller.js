(function() {

    'use strict';
    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService'];
    function CategoriesController(MenuDataService) {
        var categories = this;
        categories.categoryItems = [];

        categories.getAllCategories = function() {
            var promise = MenuDataService.getAllCategories();
            promise.then(function(res) {
                    categories.categoryItems = res.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

    }

})();
