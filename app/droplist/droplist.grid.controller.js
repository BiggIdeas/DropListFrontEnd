(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('DroplistGridController', DroplistGridController);

        DroplistGridController.$inject = ['droplistsFactory'];

    /* @ngInject */
    function DroplistGridController(droplistsFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
