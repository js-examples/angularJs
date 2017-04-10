(function() {
   'use strict';

   angular.module('public')
   .controller('SignUpController', SignUpController);

   SignUpController.$inject = ['DataService', '$http']
   function SignUpController(DataService, $http) {
      var signUpCtrl = this;
      signUpCtrl.registered = DataService.getUserInfo();
      signUpCtrl.validForm = false;
      signUpCtrl.isMenuExisted = false;

      signUpCtrl.submit = function() {
         var dish = signUpCtrl.userInfo.favorDish;
         $http.get('https://js-restaurant.herokuapp.com/menu_items/' + dish.toUpperCase() + '.json')
             .success(function(result) {
                signUpCtrl.validForm = true;
                DataService.userInfo = DataService.setUserInfo(signUpCtrl.userInfo);
                DataService.menuInfo = DataService.setMenuInfo(result);
               //  console.log(result);
             })
             .error(function(data, status) {
                 signUpCtrl.validForm = false;
                 signUpCtrl.isMenuExisted = true;
               //   console.log(status);
             });
      }
   }

})();
