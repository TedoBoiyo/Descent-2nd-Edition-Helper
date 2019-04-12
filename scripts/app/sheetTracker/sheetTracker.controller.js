(function() {
    'use strict';

    angular
        .module('sheetTracker')
        .controller('SheetTrackerController', SheetTrackerController);

    SheetTrackerController.$inject = [
        'HeroesListDataService',
        '$scope'
    ];

function SheetTrackerController(HeroesListDataService) { 
    var vm = this;
    vm.heroesList = null;
    vm.heroName = null;
    vm.heroArcheType = null;
    vm.heroImageLink = null;
    vm.heroAbility = null;
    vm.heroicFeat = null;
    vm.heroQuote = null;
    vm.heroSpeed = 0;
    vm.crntHeroHealth = 0;
    vm.maxHeroHealth = 0;
    vm.crntHeroStamina = 0;
    vm.maxHeroStamina = 0;
    vm.heroDefense = null;
    vm.heroWillpower = 0;
    vm.heroMight = 0;
    vm.heroKnowledge = 0;
    vm.heroAwareness = 0;
    vm.attackDice = 0;
    vm.redPowerDice = 0;
    vm.yellowPowerDice = 0;
    vm.greenPowerDice = 0;
    vm.greyDefenseDice = 0;
    vm.blackDefenseDice = 0;
    vm.brownDefenseDice = 0;
    vm.attackDiceResults = [];
    vm.defenseDiceResults = [];
    
    $scope.heroesList = HeroesListDataService.getHeroesList();
    
    vm.diceRoll = diceRoll;
    vm.populateHero = populateHero;

    activate();

    ///////////

    function activate() {
        
    };

    function populateHero(hero) {
        vm.heroName = hero.heroName;
        vm.heroArcheType = hero.heroArcheType;
        vm.heroImageLink = hero.heroImageLink;
        vm.heroAbility = hero.heroAbility;
        vm.heroicFeat = hero.heroicFeat;
        vm.heroQuote = hero.heroQuote;
        vm.heroSpeed = hero.heroSpeed;
        vm.crntHeroHealth = hero.heroHealth;
        vm.maxHeroHealth = hero.heroHealth;
        vm.crntHeroStamina = hero.heroStamina;
        vm.maxHeroStamina = hero.heroStamina;
        vm.heroDefense = hero.heroDefense;
        vm.heroWillpower = hero.heroWillpower;
        vm.heroMight = hero.heroMight;
        vm.heroKnowledge = hero.heroKnowledge;
        vm.heroAwareness = hero.heroAwareness;
    }

    function diceRoll() {
        vm.attackDiceResults = [];
        vm.defenseDiceResults = [];

        var arrayDice = [
            {
                "diceCount" : vm.attackDice,
                "diceColor" : "blue"
            } , {
                "diceCount" : vm.redPowerDice,
                "diceColor" : "red"
            } , {
                "diceCount" : vm.yellowPowerDice,
                "diceColor" : "yellow"
            } , {
                "diceCount" : vm.greenPowerDice,
                "diceColor" : "green"
            } , {
                "diceCount" : vm.greyDefenseDice,
                "diceColor" : "grey"
            } , {
                "diceCount" : vm.blackDefenseDice,
                "diceColor" : "black"
            } , {
                "diceCount" : vm.brownDefenseDice,
                "diceColor" : "brown"
            }
        ];

        hasDice(arrayDice);
    };

    function hasDice(arrayDice) {
        var roll;

        arrayDice.forEach(
            function(dice) {
                if(dice.diceCount > 0) {
                    for (var i = 0; i < dice.diceCount; i++) {
                        roll = Math.floor(Math.random() * 6) + 1
                        if(dice.diceColor == 'blue') {
                            vm.attackDiceResults.push({"dice" : matchBlueDice(roll)});
                        } else if(dice.diceColor == 'red') {
                            vm.attackDiceResults.push({"dice" : matchRedDice(roll)});
                        } else if(dice.diceColor == 'yellow') {
                            vm.attackDiceResults.push({"dice" : matchYellowDice(roll)});
                        } else if(dice.diceColor == 'green') {
                            vm.attackDiceResults.push({"dice" : matchGreenDice(roll)});
                        } else if(dice.diceColor == 'grey') {
                            vm.defenseDiceResults.push({"dice" : matchGreyDice(roll)});
                        } else if(dice.diceColor == 'black') {
                            vm.defenseDiceResults.push({"dice" : matchBlackDice(roll)});
                        } else if(dice.diceColor == 'brown') {
                            vm.defenseDiceResults.push({"dice" : matchBrownDice(roll)});
                        }
                    };
                };
            }
        );
    };

    function matchBlueDice(roll) {
        return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/attack/blue/Blue_Attack_Dice_" + roll + ".PNG";
    };

    function matchRedDice(roll) {
        if(roll == 1) {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/attack/red/Red_Attack_Dice_1.PNG";
        } else if (roll == 5) {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/attack/red/Red_Attack_Dice_5.PNG";
        } else if (roll == 6) {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/attack/red/Red_Attack_Dice_6.PNG";
        } else {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/aices/attack/red/Red_Attack_Dice_234.PNG";
        };
    }

    function matchYellowDice(roll) {
        return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/attack/yellow/Yellow_Attack_Dice_" + roll + ".PNG";
    }

    function matchGreenDice(roll) {
        return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/attack/green/Green_Attack_Dice_" + roll + ".PNG";
    }

    function matchGreyDice(roll) {
        if(roll == 1) {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/defense/grey/Grey_Defense_Dice_1.PNG";
        } else if (roll == 5) {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/defense/grey/Grey_Defense_Dice_5.PNG";
        } else if (roll == 6) {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/defense/grey/Grey_Defense_Dice_6.PNG";
        } else {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/defense/grey/Grey_Defense_Dice_234.PNG";
        };
    }

    function matchBlackDice(roll) {
        if(roll == 1) {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/defense/black/Black_Defense_Dice_1.PNG";
        } else if (roll == 5) {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/defense/black/Black_Defense_Dice_5.PNG";
        } else if (roll == 6) {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/defense/black/Black_Defense_Dice_6.PNG";
        } else {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/defense/black/Black_Defense_Dice_234.PNG";
        };
    }

    function matchBrownDice(roll) {
        if(roll == 6) {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/defense/brown/Brown_Defense_Dice_6.PNG";
        } else if (roll == 4 || roll == 5) {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/defense/brown/Brown_Defense_Dice_45.PNG";
        } else {
            return "https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/images/dices/defense/brown/Brown_Defense_Dice_123.PNG";
        };
    }
}

})();


