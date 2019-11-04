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
            return [
                {
                    roleName: 'Healer',
                    roleImage: 'images/roles/Healer.png'
                }, 
                {
                    roleName: 'Mage',
                    roleImage: 'images/roles/Mage.png'
                }, 
                {
                    roleName: 'Scout',
                    roleImage: 'images/roles/Scout.png'
                },
                {
                    roleName: 'Warrior',
                    roleImage: 'images/roles/Warrior.png'
                }
            ]
        }

        function getHeroes() {
            let heroList = null;

            $.ajax({
                async: false,
                url: 'data/Descent_Hero_List.json', 
                cache: false,
                method: 'GET',
                success: function(response) {
                    heroList = response;
                },
                error: function(err) {

                },
                complete: function() {
                    
                }
            });

            return heroList;
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
                        "Image" : "images/classes/warrior/champion/Valor_of_Heroes.jpeg"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "A Living Legend",
                        "Image" : "images/classes/warrior/champion/A_Living_Legend.jpeg"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Glory of Battle",
                        "Image" : "images/classes/warrior/champion/Glory_of_Battle.jpeg"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inspiring Presence",
                        "Image" : "images/classes/warrior/champion/Inspiring_Presence.jpeg"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Motivating Charge",
                        "Image" : "images/classes/warrior/champion/Motivating_Charge.jpeg"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "No Mercy",
                        "Image" : "images/classes/warrior/champion/No_Mercy.jpeg"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Stoic Resolve",
                        "Image" : "images/classes/warrior/champion/Stoic_Resolve.jpeg"
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "For the Cause",
                        "Image" : "images/classes/warrior/champion/For_the_Cause.jpeg"
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Valorous Strike",
                        "Image" : "images/classes/warrior/champion/Valorous_Strike.jpeg"
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


