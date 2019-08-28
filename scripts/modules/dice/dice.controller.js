(function() {
    'use strict';

    angular
        .module('dice')
        .controller('diceController', diceController);

        diceController.$inject = [
        '$scope',
        'DiceService'
    ];

    function diceController($scope, DiceService) {
        $scope.isDiceCalculated = false;
        $scope.attackDiceResult = [];
        $scope.defenseDiceResult = [];

        $scope.attackDice = DiceService.getAttackDice();
        $scope.defenseDice = DiceService.getDefenseDice();
        $scope.getDiceRoll = getDiceRoll;
        $scope.resetDice = resetDice;

        ///////////

        function getDiceRoll() {
            $scope.isDiceCalculated = false;
            $scope.attackDiceResult = DiceService.getDiceRoll($scope.attackDice);
            $scope.defenseDiceResult = DiceService.getDiceRoll($scope.defenseDice);
            
            if($scope.attackDiceResult.length > 0 || $scope.defenseDiceResult.length > 0) {
                $scope.isDiceCalculated = true;
            }
        }

        function resetDice() {
            $scope.isDiceCalculated = false;
            $scope.attackDiceResult = [];
            $scope.defenseDiceResult = [];
            $scope.attackDice = DiceService.getAttackDice();
            $scope.defenseDice = DiceService.getDefenseDice();
        }
    }
})();