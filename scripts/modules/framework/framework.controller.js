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
        $scope.isMobile = false;

        _addBindings();

        $timeout(function() {
            checkWidth();
            broadcastWindowSize();
        }, 2000);

        ///////////

        function _addBindings() {
            $scope.$on('character-selected', function(evt, data) {
                $scope.characterSelected = data.selectedCharacter
            });

            $($window).on('resize.framework', function() {
                $scope.$apply(function() {
                    checkWidth();
                    broadcastWindowSize();
                });
            });

            $scope.$on('$destory', function() {
                $($window).off('resize.framework');
            });
        }     
        
        function checkWidth() {
            var width = Math.max($($window).innerWidth(), $window.innerWidth);
            $scope.isMobile = (width < 576);
        }

        function broadcastWindowSize() {
            $rootScope.$broadcast('window-size', {
                isMobile: $scope.isMobile
            });
        }
    }
})();