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
            let roleList = null;

            $.ajax({
                async: false,
                url: 'data/Descent_Role_List.json', 
                cache: false,
                method: 'GET',
                success: function(response) {
                    roleList = response;
                },
                error: function(err) {

                },
                complete: function() {
                    
                }
            });

            return roleList;
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
            let classList = null;

            $.ajax({
                async: false,
                url: 'data/Descent_Class_List.json', 
                cache: false,
                method: 'GET',
                success: function(response) {
                    classList = response;
                },
                error: function(err) {

                },
                complete: function() {
                    
                }
            });

            return classList;
        }
    };
})();


