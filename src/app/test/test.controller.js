(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('TestController', TestController);

    TestController.$inject = [];

    /* @ngInject */
    function TestController() {
        var vm = this;
        vm.test = "test";
        activate();

        function activate() {

        }
    }
})();
