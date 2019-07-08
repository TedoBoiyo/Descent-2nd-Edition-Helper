(function() {
    'use strict';

    angular
        .module('sheetTracker')
        .controller('SheetTrackerController', SheetTrackerController);

    SheetTrackerController.$inject = [
        'HeroesListDataService',
        'HeroClassListDataService',
        '$scope'
    ];

function SheetTrackerController(HeroesListDataService, HeroClassListDataService, $scope) { 
    var vm = this;
    vm.selectedHero = null;
    vm.heroClassList = null;
    vm.selectedClass = null;
    vm.activeSkills = [];
    vm.attackDice = 0;
    vm.redPowerDice = 0;
    vm.yellowPowerDice = 0;
    vm.greenPowerDice = 0;
    vm.greyDefenseDice = 0;
    vm.blackDefenseDice = 0;
    vm.brownDefenseDice = 0;
    vm.attackDiceResults = [];
    vm.defenseDiceResults = [];

    vm.heroesList = HeroesListDataService.getHeroesList();
    vm.getHeroClassList = getHeroClassList;
    vm.addSkill = addSkill;
    vm.removeSkill = removeSkill;
    vm.diceRoll = diceRoll;

    $scope.$watch('vm.selectedHero', _setNewHero)
    $scope.$watch('vm.selectedHeroClass', _setNewClass)

    activate();

    ///////////

    function activate() {
        
    };

    function addSkill(skill) {
        if(!hasActiveSkill(skill)) {
            vm.activeSkills.push(skill);
        } ;

        function hasActiveSkill(skill) {
            for(var i = 0; i < vm.activeSkills.length; i++) {
                if (vm.activeSkills[i] === skill) {
                    return true;
                };
            };

            return false;
        }
    }

    function removeSkill(skill) {
        for(var i = 0; i < vm.activeSkills.length; i++) {
            if (vm.activeSkills[i] === skill) {
                vm.activeSkills.splice(i, 1)
            }
        }
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

    //////////////////
    // private methods
    //////////////////

    function _setNewHero(newVal, oldVal) {
        if (newVal !== oldVal) {
            populateHero(JSON.parse(newVal));
            getHeroClassList(vm.hero.heroArcheType);
        }
    }

    function _setNewClass(newVal, oldVal) {
        if (newVal !== oldVal) {
            vm.activeSkills = [];
            populateHeroClass(JSON.parse(newVal));
        }
    }

    function populateHero(hero) {
        vm.hero = hero;
        vm.hero.crntHeroHealth = hero.heroHealth;
        vm.hero.maxHeroHealth = hero.heroHealth;
        vm.hero.crntHeroStamina = hero.heroStamina;
        vm.hero.maxHeroStamina = hero.heroStamina;
    }

    function populateHeroClass(heroClass) {
        vm.heroClass = heroClass;

    }

    function getHeroClassList (heroArcheType) {
        vm.heroClassList = HeroClassListDataService.getHeroClasses(heroArcheType);
    }
}

})();


