(function() {
    'use strict';

    angular.module('app', [
        //Accessible everywhere
        'app.core',
        'app.data',
        'app.util',
        
        //Feature areas
        'app.users',
        'app.reports',
        'app.offers',
        'app.dashboard',
        'app.layout'
    ]);

})();