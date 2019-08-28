(function() {
    'use strict';

    angular
        .module('dice')
        .service('DiceService', DiceService);

        DiceService.$inject = [
        ];

    function DiceService() { 
        var service = {
            "getAttackDice" : getAttackDice,
            "getDefenseDice" : getDefenseDice,
            "getDiceRoll" : getDiceRoll
        };

        return service;

        ///////////

        function getAttackDice() {
            return [
                {
                    count: 0,
                    image: 'images/dices/attack/blue/Blue_Attack_Dice_6.PNG',
                    color: 'blue'
                },
                {
                    count: 0,
                    image: 'images/dices/attack/red/Red_Attack_Dice_6.PNG',
                    color: 'red'
                },
                {
                    count: 0,
                    image: 'images/dices/attack/yellow/Yellow_Attack_Dice_6.PNG',
                    color: 'yellow'
                },
                {
                    count: 0,
                    image: 'images/dices/attack/green/Green_Attack_Dice_6.PNG',
                    color: 'green'
                }
            ];
        }

        function getDefenseDice() {
            return [
                {
                    count: 0,
                    image: 'images/dices/defense/grey/Grey_Defense_Dice_6.PNG',
                    color: 'grey'
                },
                {
                    count: 0,
                    image: 'images/dices/defense/black/Black_Defense_Dice_6.PNG',
                    color: 'black'
                },
                {
                    count: 0,
                    image: 'images/dices/defense/brown/Brown_Defense_Dice_6.PNG',
                    color: 'brown'
                },
            ];
        }

        function getDiceRoll(diceList) {
            var roll;
            var diceResult = [];
    
            diceList.forEach(
                function(dice) {
                    if(dice.count > 0) {
                        for (var i = 0; i < dice.count; i++) {
                            roll = Math.floor(Math.random() * 6) + 1
                            if(dice.color == 'blue') {
                                diceResult.push({"dice" : matchBlueDice(roll)});
                            } else if(dice.color == 'red') {
                                diceResult.push({"dice" : matchRedDice(roll)});
                            } else if(dice.color == 'yellow') {
                                diceResult.push({"dice" : matchYellowDice(roll)});
                            } else if(dice.color == 'green') {
                                diceResult.push({"dice" : matchGreenDice(roll)});
                            } else if(dice.color == 'grey') {
                                diceResult.push({"dice" : matchGreyDice(roll)});
                            } else if(dice.color == 'black') {
                                diceResult.push({"dice" : matchBlackDice(roll)});
                            } else if(dice.color == 'brown') {
                                diceResult.push({"dice" : matchBrownDice(roll)});
                            }
                        };
                    };
                }
            );

            return diceResult;
        };
    
        function matchBlueDice(roll) {
            return "images/dices/attack/blue/Blue_Attack_Dice_" + roll + ".PNG";
        };
    
        function matchRedDice(roll) {
            if(roll == 1) {
                return "images/dices/attack/red/Red_Attack_Dice_1.PNG";
            } else if (roll == 5) {
                return "images/dices/attack/red/Red_Attack_Dice_5.PNG";
            } else if (roll == 6) {
                return "images/dices/attack/red/Red_Attack_Dice_6.PNG";
            } else {
                return "images/dices/attack/red/Red_Attack_Dice_234.PNG";
            };
        }
    
        function matchYellowDice(roll) {
            return "images/dices/attack/yellow/Yellow_Attack_Dice_" + roll + ".PNG";
        }
    
        function matchGreenDice(roll) {
            return "images/dices/attack/green/Green_Attack_Dice_" + roll + ".PNG";
        }
    
        function matchGreyDice(roll) {
            if(roll == 1) {
                return "images/dices/defense/grey/Grey_Defense_Dice_1.PNG";
            } else if (roll == 5) {
                return "images/dices/defense/grey/Grey_Defense_Dice_5.PNG";
            } else if (roll == 6) {
                return "images/dices/defense/grey/Grey_Defense_Dice_6.PNG";
            } else {
                return "images/dices/defense/grey/Grey_Defense_Dice_234.PNG";
            };
        }
    
        function matchBlackDice(roll) {
            if(roll == 1) {
                return "images/dices/defense/black/Black_Defense_Dice_1.PNG";
            } else if (roll == 5) {
                return "images/dices/defense/black/Black_Defense_Dice_5.PNG";
            } else if (roll == 6) {
                return "images/dices/defense/black/Black_Defense_Dice_6.PNG";
            } else {
                return "images/dices/defense/black/Black_Defense_Dice_234.PNG";
            };
        }
    
        function matchBrownDice(roll) {
            if(roll == 6) {
                return "images/dices/defense/brown/Brown_Defense_Dice_6.PNG";
            } else if (roll == 4 || roll == 5) {
                return "images/dices/defense/brown/Brown_Defense_Dice_45.PNG";
            } else {
                return "images/dices/defense/brown/Brown_Defense_Dice_123.PNG";
            };
        }
    
    };
})();


