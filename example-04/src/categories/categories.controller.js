(function() {

    'use strict';
    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService'];
    function CategoriesController(MenuDataService) {
   //  CategoriesController.$inject = ['items'];
   //  function CategoriesController(items) {
        var categories = this;
        categories.categoryItems = [];

        categories.getAllCategories = function() {
            var promise = MenuDataService.getAllCategories();
            promise.then(function(res) {
                    categories.categoryItems = res.data;
                  //   console.log(categories.categoryItems.length);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

    }

})();
