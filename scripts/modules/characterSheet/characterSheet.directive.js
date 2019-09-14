(function() {
    "use strict";

    angular
        .module('characterSheet')
        .directive('characterSheet', characterSheet);

        characterSheet.$inject = [
    
    ];

    //usage: <character-selection></character-selection>
    function characterSheet() {
        var directive = {
            transclude: true,
            scope: {

            },
            controller: 'characterSheetController',
            templateUrl: 'scripts/modules/characterSheet/characterSheet.html',
            link: _link
        };

        return directive;

        //////////

        function _link(scope, elem, attrs) {
            scope.chosenHero = JSON.parse(attrs.chosenHero);
        }
    }
})();