(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('LandingController', LandingController);

    LandingController.$inject = ["$stateParams"];

    /* @ngInject */
    function LandingController($stateParams) {
        var vm = this;
        vm.landing = "test";
        activate();

        function activate() {

        }
    }
})();
