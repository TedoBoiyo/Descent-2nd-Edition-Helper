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
        $scope.isMobile = false;

        $scope.roles = characterSelectionService.getRoles();
        $scope.heroes = characterSelectionService.getHeroes();
        $scope.classes = characterSelectionService.getClasses();

        $scope.confirmSelection = confirmSelection;
        $scope.resetSelection = resetSelection;

        _addBindings();

        // For testing purposes only
        // $scope.selectedRole = $scope.roles[3]
        // $scope.selectedHero = $scope.heroes[3]
        // $scope.selectedClass = $scope.classes[20]
        // confirmSelection();

        ///////////

        function confirmSelection() {
            let isHybrid = $scope.selectedHybridClass ? $scope.selectedHybridClass : null;

            $scope.characterSelected = {
                role: $scope.selectedRole,
                hero: $scope.selectedHero,
                class: $scope.selectedClass,
                hybrid: isHybrid
            };
            
            $rootScope.$broadcast('character-selected', {
                selectedCharacter: $scope.characterSelected
            });

        }

        function resetSelection() {
            $scope.selectedRole = null;
            $scope.selectedHero = null;
            $scope.selectedClass = null;
            $scope.selectedHybridClass = undefined;
            $scope.characterSelected = null;
        }

        function _addBindings() {
            $scope.$on('window-size', function(_evt, data) {
                $scope.isMobile = data.isMobile;
            })
        }
    }
})();