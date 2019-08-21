(function() {
    'use strict';

    angular
        .module('dice')
        .controller('diceController', diceController);

        diceController.$inject = [
        '$scope'
    ];

    function diceController($scope) {
        $scope.isLoading = false;

        ///////////

        
    }
})();