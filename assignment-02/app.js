(function() {
    'use strict';

    var myApp = angular.module('myApp', [])
        .controller('ShoppingListController', ShoppingListController)
        .controller('CompletedListController', CompletedListController)
        .service('ShoppingListService', ShoppingListService);

    ShoppingListController.$inject = ['ShoppingListService'];
    function ShoppingListController(ShoppingListService) {

        var list1 = this;

        ShoppingListService.addItem('cookies', '10 pieces');
        ShoppingListService.addItem('chips', '3 bags');
        ShoppingListService.addItem('waters', '3 bottles');
        ShoppingListService.addItem('fruits', '2 bags');
        ShoppingListService.addItem('buffalo wings', '3 pounds');

        list1.items = ShoppingListService.getItemLists();
        list1.name = '';
        list1.quantity = '';

        list1.addItem = function() {
            if (list1.name === '' || list1.quantity==='') {}
            else {
               ShoppingListService.addItem(list1.name, list1.quantity);
               list1.name = '';
               list1.quantity = '';
            }
        };

        list1.removeItem = function(idx) {
            ShoppingListService.removeItem(idx);
        };
    }


    CompletedListController.$inject = ['ShoppingListService'];
    function CompletedListController(ShoppingListService) {

        var list2 = this;
        list2.items = ShoppingListService.getDoneLists();

    }

    function ShoppingListService() {
        var service = this;
        var itemLists = [];
        var doneLists = [];

        service.addItem = function(sName, iQuantity) {
            var item = {
                name: sName,
                quantity: iQuantity
            };
            itemLists.push(item);
        };

        service.removeItem = function(idx) {
            doneLists.push(itemLists[idx]);
            itemLists.splice(idx, 1);
        };

        service.getItemLists = function() {
            return itemLists;
        };

        service.getDoneLists = function() {
           return doneLists;
        };
    }

})();
