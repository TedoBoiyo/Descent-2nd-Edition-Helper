(function() {
    'use strict';

    angular
        .module('sheetTracker')
        .controller('SheetTrackerController', SheetTrackerController);

    SheetTrackerController.$inject = [];

function SheetTrackerController() { 
    var vm = this;
    vm.heroName = null;
    vm.heroImageLink = null;
    vm.heroAbility = null;
    vm.heroicFeat = null;
    vm.heroSpeed = 0;
    vm.heroHealth = 0;
    vm.heroStamina = 0;
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
    vm.diceResults = [];

    vm.diceRoll = diceRoll;

    activate();

    ///////////

    function activate() {
        
    };

    function diceRoll() {
        vm.diceResults = [];

    }
}

})();


