(function() {
    'use strict';

    angular
        .module('characterSheet')
        .controller('characterSheetController', characterSheetController);

        characterSheetController.$inject = [
        '$scope',
    ];

    function characterSheetController($scope, $parent) {
        $scope.showActiveSkills = false;
        $scope.isMobile = false;

        $scope.hero = $scope.$parent.$parent.characterSelected.hero;
        $scope.class = $scope.$parent.$parent.characterSelected.class;
        $scope.skills = $scope.$parent.$parent.characterSelected.skills;

        $scope.maxHeroHealth = $scope.hero.heroHealth;
        $scope.crntHeroHealth = $scope.hero.heroHealth;
        $scope.maxHeroStamina = $scope.hero.heroStamina;
        $scope.crntHeroStamina = 0;
        $scope.activate

        $scope.statAdd = statAdd;
        $scope.statMinus = statMinus
        $scope.activeSkillFilter = activeSkillFilter;
        $scope.changeFilter = changeFilter;

        _addBindings();
        
        ///////////

        function statAdd(crntVal, maxVal, statType = null) {
            if (crntVal === maxVal) {
                if (statType === 'stamina') {
                    $scope.crntHeroHealth = statMinus($scope.crntHeroHealth, $scope.maxHeroHealth)
                } 

                return crntVal;
            } else {
                return crntVal + 1;
            }
        }

        function statMinus(crntVal, statType = null) {
            if (crntVal === 0) {
                return crntVal;
            } else {
                if (statType === 'health' && crntVal === 1) {
                    $scope.crntHeroStamina = $scope.maxHeroStamina;
                }

                return crntVal - 1;
            }
        }

        function activeSkillFilter () {
            if ($scope.showActiveSkills) {
                return true;
            } else {
                return '';
            }
        }

        function changeFilter() {
            $scope.showActiveSkills = !$scope.showActiveSkills;
        }

        function _addBindings() {
            $scope.$on('window-size', function(_evt, data) {
                $scope.isMobile = data.isMobile;
            })
        }
    }
})();