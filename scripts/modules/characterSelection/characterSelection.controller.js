(function() {
    'use strict';

    angular
        .module('characterSelection')
        .controller('characterSelectionController', characterSelectionController);

        characterSelectionController.$inject = [
        '$scope',
        '$rootScope',
        'characterSelectionService'
    ];

    function characterSelectionController($scope, $rootScope, characterSelectionService) {
        $scope.viewSkillInfo = false;
        $scope.characterSelected = null;

        $scope.roles = characterSelectionService.getRoles();
        $scope.heroes = characterSelectionService.getHeroes();
        $scope.classes = characterSelectionService.getClasses();

        $scope.confirmSelection = confirmSelection;
        $scope.resetSelection = resetSelection;

        // For testing purposes only
        // $scope.selectedRole = $scope.roles[3]
        // $scope.selectedHero = $scope.heroes[3]
        // $scope.selectedClass = $scope.classes[20]
        // confirmSelection();

        ///////////

        function confirmSelection() {
            $scope.characterSelected = {
                role: $scope.selectedRole,
                hero: $scope.selectedHero,
                class: $scope.selectedClass
            };
            
            $rootScope.$broadcast('character-selected', {
                selectedCharacter: $scope.characterSelected
            });

        }

        function resetSelection() {
            $scope.selectedRole = null;
            $scope.selectedHero = null;
            $scope.selectedClass = null;
            $scope.characterSelected = null;
        }
    }
})();