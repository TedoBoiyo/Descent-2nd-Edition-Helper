(function() {
    'use strict';

    angular
        .module('dataService')
        .service('HeroClassListDataService', HeroClassListDataService);

        HeroClassListDataService.$inject = [
        ];

    function HeroClassListDataService() { 
        var service = {
            "getHealerClassList" : getHealerClassList,
            "getMageClassList" : getMageClassList,
            "getWarriorClassList" : getWarriorClassList,
            "getScoutClassList" : getScoutClassList
        };

        return service;

        ///////////

        function getHealerClassList() {
            return [
                {
                    "Apothecary" : 
                    [{
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
                    }],

                    "Bard" : 
                    [{
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
                    }],

                    "Disciple" : 
                    [{
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

                    "Prophet" : 
                    [{
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
                    }],

                    "Spiritspeaker" : 
                    [{
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
                    }],

                    "Watchman" : 
                    [{
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
                    "Battlemage" : 
                    [{
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
                    }],

                    "Conjurer" : 
                    [{
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
                    }],

                    "Geomancer" : 
                    [{
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
                    }],

                    "Hexer" : 
                    [{
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
                    }],

                    "Necromancer" : 
                    [{
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
                    }],

                    "Runemaster" : 
                    [{
                        "XP_Cost" : 0,
                        "Name" : "Runic Knowledge",
                        "Image" : "images/classes/runemaster/Runic_Knowledge.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Exploding Rune",
                        "Image" : "images/classes/runemaster/Exploding_Rune.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Ghost Armor",
                        "Image" : "images/classes/runemaster/Ghost_Armor.PNG"
                    },
                    {
                        "XP_Cost" : 1,
                        "Name" : "Inscribe Rune",
                        "Image" : "images/classes/runemaster/Inscribe_Rune.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Iron Will",
                        "Image" : "images/classes/runemaster/Iron_Will.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Rune Mastery",
                        "Image" : "images/classes/runemaster/Rune_Mastery.PNG"
                    },
                    {
                        "XP_Cost" : 2,
                        "Name" : "Runic Sorcery",
                        "Image" : "images/classes/runemaster/Runic_Sorcery.PNG"
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Break the Rune",
                        "Image" : "images/classes/runemaster/Break_the_Rune.PNG"
                    },
                    {
                        "XP_Cost" : 3,
                        "Name" : "Quick Casting",
                        "Image" : "images/classes/runemaster/Quick_Casting.PNG"
                    }]
                }
            ]
        };

        function getWarriorClassList() {
            return [
                {
                    "Beastmaster" : 
                    [{
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
                    }],

                    "Beserker" : 
                    [{
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
                    }],

                    "Champion" : 
                    [{
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
                    }],

                    "Knight" : 
                    [{
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
                    }],

                    "Skirmisher" : 
                    [{
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
                    }],

                    "Steelcaster" :
                    [{
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
                    "Bounty Hunter" : 
                    [{
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
                    }],

                    "Monk" : 
                    [{
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
                    }],

                    "Stalker" : 
                    [{
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
                    }],

                    "Thief" : 
                    [{
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
                    }],

                    "Treasure Hunter" : 
                    [{
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
                    }],

                    "Wildlander" : 
                    [{
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
                    }],
                }
            ]
        };
    };
})();


