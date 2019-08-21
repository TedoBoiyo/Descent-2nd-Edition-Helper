(function() {
    "use strict";

    angular
        .module('framework')
        .directive('framework', framework);

    framework.$inject = [
    
    ];

    //usage: <framework></pframework>
    function framework() {
        var directive = {
            transclude: true,
            scope: {
                name: '@'
            },
            controller: 'frameworkController',
            templateUrl: 'scripts/modules/framework/frameworkTemplate.html'
        };

        return directive;
    }
})();