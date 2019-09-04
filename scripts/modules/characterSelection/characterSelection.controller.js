(function() {
    'use strict';

    angular
        .module('characterSelection')
        .controller('characterSelectionController', characterSelectionController);

        characterSelectionController.$inject = [
        '$scope',
        'characterSelectionService'
    ];

    function characterSelectionController($scope, characterSelectionService) {
        $scope.roles = characterSelectionService.getRoles();
        $scope.heroes = characterSelectionService.getHeroes();
        $scope.classes = characterSelectionService.getClasses();

        $scope.confirmSelection = confirmSelection;
        $scope.cancelSelection = cancelSelection;

        ///////////

        function confirmSelection() {
            alert($scope.selectedRole.roleName.concat(' ', $scope.selectedHero.heroName, ' ', $scope.selectedClass.className));
        }

        function cancelSelection() {
            $scope.selectedRole = null;
            $scope.selectedHero = null;
            $scope.selectedClass = null;
        }
    }
})();