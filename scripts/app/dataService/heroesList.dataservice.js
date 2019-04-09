(function() {
    'use strict';

    angular
        .module('dataservice')
        .service('HeroesListDataService', HeroesListDataService);

        HeroesListDataService.$inject = [];

    function HeroesListDataService() { 
        var service = {
            "getHeroesList" : getHeroesList
        };

        return service;

        ///////////

        function getHeroesList() {
            var heroesList = [ 
                {
                    "heroName" : "Hero Name",
                    "heroArcheType" : null, 
                    "heroImageLink" : "images/heroes/Hero_Selection.PNG",
                    "heroAbility" : null,
                    "heroicFeat" : null, 
                    "heroQuote" : null, 
                    "heroSpeed" : 0,
                    "heroHealth" : 0,
                    "heroStamina" : 0,
                    "heroDefense" : "images/stats/Defense_Gray.PNG", 
                    "heroMight" : 0,
                    "heroKnowledge" : 0,  
                    "heroWillpower" : 0, 
                    "heroAwareness" : 0 
                },
                {
                    "heroName" : "Jain Fairwood",
                    "heroArcheType" : "Scout", 
                    "heroImageLink" : "images/heroes/Jain_Fairwood.PNG",
                    "heroAbility" : "When you suffer any amount of {heart/dmg} " +
                                    "from an attack, you may choose to suffer some " +
                                    "of all of that amount as {fatigue} instead; you " +
                                    "cannot suffer {fatigue} in excess of your stamina",
                    "heroicFeat" : "{Take an action}: You may move double your Speed and " +
                                    "perform an attack. This attack may be performed before, " +
                                    "after, or during this movement.", 
                    "heroQuote" : "Out here in the wilds, I protect those who have misjudged me.", 
                    "heroSpeed" : 5,
                    "heroHealth" : 8,
                    "heroStamina" : 5,
                    "heroDefense" : "images/stats/Defense_Gray.PNG", 
                    "heroMight" : 2,
                    "heroKnowledge" : 3,  
                    "heroWillpower" : 2, 
                    "heroAwareness" : 4 
                }
            ];
            
            return heroesList;
        };
    };
})();


