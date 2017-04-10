(function() {
    'use strict';

    angular.module('common').service('DataService', DataService);

    function DataService() {
        var dataService = this;
        var userInfo = null;
        var menuInfo = null;

        dataService.setUserInfo = function(user) {
            userInfo = user;
        }

        dataService.getUserInfo = function() {
            return userInfo;
        }

        dataService.setMenuInfo = function(menu) {
            menuInfo = menu;
        }

        dataService.getMenuInfo = function() {
            return menuInfo;
        }
    }

})();
