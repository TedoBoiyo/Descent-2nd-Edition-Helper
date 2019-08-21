(function() {
    'use strict';

    angular
        .module('framework')
        .controller('frameworkController', frameworkController);

        frameworkController.$inject = [
        '$scope',
        '$window',
        '$timeout',
        '$rootScope',
        '$location'
    ];

    function frameworkController($scope, $window, $timeout, $rootScope, $location) {
        $scope.isLoading = false;

        ///////////

        
    }
})();