(function() {
    'use strict';

    angular
        .module('dataService')
        .service('HeroesListDataService', HeroesListDataService);

        HeroesListDataService.$inject = [
        ];

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
                    "heroName" : "Avric Albright",
                    "heroArcheType" : "Healer", 
                    "heroImageLink" : "images/heroes/Avric_Albright.PNG",
                    "heroAbility" : "Each hero within 3 spaces of your (including yourself) gains " + 
                                    "{surge}: Recover 1 {heart/dmg} on all attack rolls.",
                    "heroicFeat" : "{Take an action}: Roll 2 red power dice. Each hero within 3 spaces of you " + 
                                    "(inlcuding yourself) may recover {hearts/dmg} equal to the {hearts/dmg} rolled.", 
                    "heroQuote" : "I pledge myself to those in need. I will be their shield, their light in the darkness.", 
                    "heroSpeed" : 4,
                    "heroHealth" : 12,
                    "heroStamina" : 4,
                    "heroDefense" : "images/stats/Defense_Gray.PNG", 
                    "heroMight" : 2,
                    "heroKnowledge" : 3,  
                    "heroWillpower" : 4, 
                    "heroAwareness" : 2 
                },
                {
                    "heroName" : "High Mage Quellen",
                    "heroArcheType" : "Mage", 
                    "heroImageLink" : "images/heroes/High_Mage_Quellen.PNG",
                    "heroAbility" : "At the start of your turn, you may choose another hero within 3 spaces " + 
                                    "of you. If the chosen hero has at least 1 fatigue token on his Hero sheet, " +
                                    "you recover 1 {fatigue}. If he has fatigue tokens equal to his Stamina, you " +
                                    "recover 2 {fatigue}.",
                    "heroicFeat" : "Use at the start of your turn to increase your Stamina by 4 for the remainder " +
                                    "of this turn. At the end of your turn, recover all of your {fatigue}.", 
                    "heroQuote" : "I feed off the wisdom of others, even when it's less filling than my own.", 
                    "heroSpeed" : 4,
                    "heroHealth" : 10,
                    "heroStamina" : 4,
                    "heroDefense" : "images/stats/Defense_Gray.PNG", 
                    "heroMight" : 1,
                    "heroKnowledge" : 5,  
                    "heroWillpower" : 3, 
                    "heroAwareness" : 2 
                },
                {
                    "heroName" : "Jain Fairwood",
                    "heroArcheType" : "Scout", 
                    "heroImageLink" : "images/heroes/Jain_Fairwood.PNG",
                    "heroAbility" : "When you suffer any amount of {hearts/dmg} " +
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
                },
                {
                    "heroName" : "Reynhart the Worthy",
                    "heroArcheType" : "Warrior", 
                    "heroImageLink" : "images/heroes/Reynhart_the_Worthy.PNG",
                    "heroAbility" : "If you roll an X during an attack roll, you may suffer 1 {fatigue} " +
                                    "and reroll 1 attack die. Limit once per attack.",
                    "heroicFeat" : "Use after rolling an X during an attack roll to recover all of your " +
                                    "{fatigue} and to reroll any or all of the dice in your attack pool.", 
                    "heroQuote" : "I've been known to lose. but never to give up!", 
                    "heroSpeed" : 4,
                    "heroHealth" : 12,
                    "heroStamina" : 4,
                    "heroDefense" : "images/stats/Defense_Gray.PNG", 
                    "heroMight" : 3,
                    "heroKnowledge" : 1,  
                    "heroWillpower" : 4, 
                    "heroAwareness" : 3 
                }
            ];
            
            return heroesList;
        };
    };
})();


