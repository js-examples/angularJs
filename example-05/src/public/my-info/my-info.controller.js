(function(){
   'use strict';

   angular.module('public')
   .controller('MyInfoController', MyInfoController);

   MyInfoController.$inject = ['DataService'];
   function MyInfoController(DataService) {
      var myInfoCtrl = this;
      myInfoCtrl.userInfo = DataService.getUserInfo();
      myInfoCtrl.menuInfo = DataService.getMenuInfo();
   }

})();
