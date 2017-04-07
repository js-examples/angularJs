(function() {

    'use strict';
    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['menuItems'];

    function ItemsController(menuItems) {
        var items = this;
        items.itemList = menuItems.menu_items;
      //   console.log(items.itemList);
    }

})();
