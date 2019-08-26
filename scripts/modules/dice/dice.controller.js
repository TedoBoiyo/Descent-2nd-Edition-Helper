(function() {
    'use strict';

    angular
        .module('dice')
        .controller('diceController', diceController);

        diceController.$inject = [
        '$scope'
    ];

    function diceController($scope) {
        $scope.isLoading = false;
        $scope.attackDice = [
            {
                count: 0,
                image: 'images/dices/blue/Blue_Attack_Dice_6.PNG'
            },
            {
                count: 0,
                image: 'images/dices/red/Red_Attack_Dice_6.PNG'
            },
            {
                count: 0,
                image: 'images/dices/yellow/Yellow_Attack_Dice_6.PNG'
            },
            {
                count: 0,
                image: 'images/dices/green/Green_Attack_Dice_6.PNG'
            },
        ];
        $scope.defenseDice = [
            {
                count: 0,
                image: 'images/dices/defense/grey/Grey_Defense_Dice_6.PNG'
            },
            {
                count: 0,
                image: 'images/dices/defense/black/Black_Defense_Dice_6.PNG'
            },
            {
                count: 0,
                image: 'images/dices/defense/brown/Brown_Defense_Dice_6.PNG'
            },
            
        ];

        ///////////

        
    }
})();