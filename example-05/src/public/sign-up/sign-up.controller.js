(function() {
   'use strict';

   angular.module('public')
   .controller('SignUpController', SignUpController)
   .constant('ApiBasePath', 'https://js-restaurant.herokuapp.com/');

   SignUpController.$inject = ['DataService', '$http', 'ApiBasePath']
   function SignUpController(DataService, $http, ApiBasePath) {
      var signUpCtrl = this;
      signUpCtrl.registered = DataService.getUserInfo();
      signUpCtrl.validForm = false;
      signUpCtrl.isMenuExisted = false;

      signUpCtrl.submit = function() {
         var dish = signUpCtrl.userInfo.favorDish;
         $http.get(ApiBasePath + '/menu_items/' + dish.toUpperCase() + '.json')
             .success(function(result) {
                signUpCtrl.validForm = true;
                DataService.userInfo = DataService.setUserInfo(signUpCtrl.userInfo);
                DataService.menuInfo = DataService.setMenuInfo(result);
             })
             .error(function(data, status) {
                 signUpCtrl.validForm = false;
                 signUpCtrl.isMenuExisted = true;
             });
      }
   }

})();
