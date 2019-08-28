(function() {
    "use strict";

    angular
        .module('characterSelection')
        .directive('characterSelection', characterSelection);

        characterSelection.$inject = [
    
    ];

    //usage: <character-selection></character-selection>
    function characterSelection() {
        var directive = {
            transclude: true,
            scope: {
                
            },
            controller: 'characterSelectionController',
            templateUrl: 'scripts/modules/characterSelection/characterSelection.html'
        };

        return directive;
    }
})();