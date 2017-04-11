(function() {

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

        // Redirect to tab 1 if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/home/home.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/categories/categories.html',
                controller: 'CategoriesController as categories'
            })

            .state('items', {
                url: '/items/{shortname}',
                templateUrl: 'src/items/items.html',
                controller: 'ItemsController as items',
                resolve: {
                    menuItems: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.shortname)
                            .then(function(res) {
                                return res.data;
                            });
                    }]
                }
            });
    }


})();
