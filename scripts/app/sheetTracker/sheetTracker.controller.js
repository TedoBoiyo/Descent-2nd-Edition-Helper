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


