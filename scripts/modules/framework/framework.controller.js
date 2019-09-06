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
        $scope.characterSelected = null;

        _addBindings();

        ///////////

        function _addBindings() {
            $scope.$on('character-selected', function(evt, data) {
                $scope.characterSelected = data.selectedCharacter
            });
        }        
    }
})();