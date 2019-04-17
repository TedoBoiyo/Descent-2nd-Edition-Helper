(function() {
    'use strict';

    angular
        .module('dataService')
        .service('HeroClassListDataService', HeroClassListDataService);

        HeroClassListDataService.$inject = [
        ];

    function HeroClassListDataService() { 
        var service = {
            "getHeroClasses" : getHeroClasses
        };

        return service;

        ///////////

        function getHeroClasses(archetype) {
            switch(archetype) {
                case "Healer":
                    return getHealerClassList();
                case "Mage":
                    return getMageClassList();
                case "Warrior":
                    return getWarriorClassList();
                case "Scout":
                    return getScoutClassList();
                default:
                    return null;
            }
        }

        function getHealerClassList() {
            return [
                {
                    "className" : "Apothecary", 
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
        };

        function getMageClassList() {
            return [
                {
                    "className": "Battlemage",
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
        };

        function getWarriorClassList() {
            return [
                {
                    "className": "Beastmaster", 
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
        };

        function getScoutClassList() {
            return [
                {
                    "className" : "Bounty Hunter",
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
        };
    };
})();


