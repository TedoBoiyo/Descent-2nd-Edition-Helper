(function() {
    'use strict';

    angular
        .module('characterSelection')
        .service('characterSelectionService', characterSelectionService);

        characterSelectionService.$inject = [
        ];

    function characterSelectionService() { 
        var service = {
            "getRoles" : getRoles,
            "getHeroes" : getHeroes,
            "getClasses" : getClasses
        };

        return service;

        ///////////

        function getRoles() {
            return ['Healer', 'Mage', 'Scout', 'Warrior']
        }

        function getHeroes() {
            return [
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
            ]
        }

        function getClasses() {
            return [
                {
                    "className" : "Apothecary",
                    "classType" : "Healer", 
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className": "Bard",
                    "classType" : "Healer",  
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className": "Disciple",
                    "classType" : "Healer",  
                    "skills" : [{
                        "XP_Cost" : 0,
                        "Name" : "Prayer of Healing",
                        "Image" : "images/classes/disciple/Prayer_of_Healing.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Armor of Faith",
                        "Image" : "images/classes/disciple/Armor_of_Faith.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Blessed Strike",
                        "Image" : "images/classes/disciple/Blessed_Strike.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Cleansing Touch",
                        "Image" : "images/classes/disciple/Cleansing_Touch.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Divine Fury",
                        "Image" : "images/classes/disciple/Divine_Fury.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Prayer of Peace",
                        "Image" : "images/classes/disciple/Prayer_of_Peace.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Time of Need",
                        "Image" : "images/classes/disciple/Time_of_Need.PNG"
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Holy Power",
                        "Image" : "images/classes/disciple/Holy_Power.PNG"
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Radiant Light",
                        "Image" : "images/classes/disciple/Radiant_Light.PNG"
                    }],
                },   
                {
                    "className": "Prophet", 
                    "classType" : "Healer", 
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className": "Spiritspeaker", 
                    "classType" : "Healer",
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },  
                {
                    "className": "Watchman", 
                    "classType" : "Healer",
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className": "Battlemage",
                    "classType": "Mage",
                    "skills" : [{
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className": "Conjurer", 
                    "classType": "Mage",
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className": "Geomancer",  
                    "classType": "Mage",
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className": "Hexer",  
                    "classType": "Mage",
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className" : "Necromancer", 
                    "classType": "Mage", 
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className" : "Runemaster", 
                    "classType": "Mage",
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Runic Knowledge",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Exploding Rune",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Ghost Armor",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inscribe Rune",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Iron Will",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Rune Mastery",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Runic Sorcery",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Break the Rune",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Quick Casting",
                        "Image" : null
                    }]
                },
                {
                    "className" : "Bounty Hunter",
                    "classType" : "Scout",
                    "skills" : [{
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className" : "Monk",
                    "classType" : "Scout",
                    "skills" : [{
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className" : "Stalker", 
                    "classType" : "Scout",
                    "skills" : [{
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className" : "Thief",
                    "classType" : "Scout",
                    "skills" : [{
                        "XP_Cost" : 0,
                        "Name" : "Greedy",
                        "Image" : "images/classes/disciple/Greedy.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Appraisal",
                        "Image" : "images/classes/disciple/Appraisal.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Dirty Tricks",
                        "Image" : "images/classes/disciple/Dirty_Tricks.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Sneaky",
                        "Image" : "images/classes/disciple/Sneaky.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Caltrops",
                        "Image" : "images/classes/disciple/Caltrops.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Tumble",
                        "Image" : "images/classes/disciple/Tumble.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Unseen",
                        "Image" : "images/classes/disciple/Unseen.PNG"
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Bushwhack",
                        "Image" : "images/classes/disciple/Bushwhack.PNG"
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Lurk",
                        "Image" : "images/classes/disciple/Lurk.PNG"
                    }]
                },
                {
                    "className" : "Treasure Hunter",
                    "classType" : "Scout",
                    "skills" : [{
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className" : "Wildlander",
                    "classType" : "Scout",
                    "skills" : [{
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className": "Beastmaster", 
                    "classType": "Warrior",
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className" : "Beserker",  
                    "classType": "Warrior",
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className" : "Champion", 
                    "classType": "Warrior",
                    "skills" : [{
                        "XP_Cost" : 0,
                        "Name" : "Valor of Heroes",
                        "Image" : "images/classes/disciple/Valor_of_Heroes.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "A Living Legend",
                        "Image" : "images/classes/disciple/A_Living_Legend.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Glory of Battle",
                        "Image" : "images/classes/disciple/Glory_of_Battle.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inspiring Presence",
                        "Image" : "images/classes/disciple/Inspiring_Presence.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Motivating Charge",
                        "Image" : "images/classes/disciple/Motivating_Charge.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "No Mercy",
                        "Image" : "images/classes/disciple/No_Mercy.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Stoic Resolve",
                        "Image" : "images/classes/disciple/Stoic_Resolve.PNG"
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "For the Cause",
                        "Image" : "images/classes/disciple/For_the_Cause.PNG"
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Valorous Strike",
                        "Image" : "images/classes/disciple/Valorous_Strike.PNG"
                    }]
                },
                {
                    "className" : "Knight",
                    "classType": "Warrior",
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className" : "Skirmisher",
                    "classType": "Warrior", 
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                },
                {
                    "className" : "Steelcaster",
                    "classType": "Warrior",
                    "skills" : [{ 
                        "XP_Cost" : 0,
                        "Name" : "Brew Elixir",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Concotion",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Herbal Lore",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inky Substance",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Bottled Courage",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Protective Tonic",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Secret Formula",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Hidden Stash",
                        "Image" : null
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Potent Remedies",
                        "Image" : null
                    }]
                }
            ]
        }
    };
})();


