(function() {
    'use strict';

    angular
        .module('characterSheet')
        .controller('characterSheetController', characterSheetController);

        characterSheetController.$inject = [
        '$scope',
    ];

    function characterSheetController($scope, $rootScope) {
        $scope.showActiveSkills = false;
        $scope.activeSkillFilter = activeSkillFilter;
        $scope.changeFilter = changeFilter;
        ///////////

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
    }
})();