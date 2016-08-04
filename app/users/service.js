(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .factory('User', User);

    User.$inject = ['$q', 'dataservice', 'logger', 'restangular'];

    function User($q, dataservice, logger, Restangular) {
        var defered = $q;
        return{
            getUser: function(){
            },
            setuser: function(){
            }
        }
    }
})();