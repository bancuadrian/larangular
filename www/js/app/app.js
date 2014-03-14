var app = angular.module('app',['app.controllers','app.services','app.directives','ngRoute']);

/** config default factories and routes */
app.config(function ($routeProvider,$httpProvider,$provide) {
    /** default factory */
    $provide.factory('DefaultFactory',function(){

        /** get stuff */
//        $.ajax({
//            async: false,
//            type: 'GET',
//            url: '',
//            success: function(response) {
//
//            }
//        });

        return {

        }
    });

    /** home route */
    $routeProvider.when('/', {
        templateUrl: '/www/partials/home.html',
        controller: 'HomeController',
        resolve:{
        }
    });

    /** default route */
    $routeProvider.otherwise({redirectTo: '/'});
});

/** on run */
app.run(function($rootScope,$location){
    /** set watchers on rootscope - useful for login */

    $rootScope.$on('$routeChangeSuccess', function(scope, next, current){
        if($location.path() == '/whatever'){
            //  actions when hitting route
        }
    });
});

var controllers = angular.module('app.controllers',[]);
var services = angular.module('app.services',[]);
var directives = angular.module('app.directives',[]);

controllers.controller('HomeController',function($scope,$http,$sce){
    $http.get('/api/public/').then(
        function(success){
            $scope.hello = $sce.trustAsHtml(success.data);
        });
});
