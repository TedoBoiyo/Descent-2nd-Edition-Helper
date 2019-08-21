(function() {
    "use strict";

    angular
        .module('dice')
        .directive('dice', dice);

    dice.$inject = [
    
    ];

    //usage: <dice></dice>
    function dice() {
        var directive = {
            transclude: true,
            scope: {
                
            },
            controller: 'diceController',
            templateUrl: 'scripts/modules/dice/diceTemplate.html'
        };

        return directive;
    }
})();