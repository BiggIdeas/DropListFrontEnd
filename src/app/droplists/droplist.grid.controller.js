(function() {
    'use strict';

    angular
        .module('app.droplists')
        .controller('DroplistsGridController', DroplistsGridController);

        DroplistsGridController.$inject = ['droplistsFactory'];

    /* @ngInject */
    function DroplistsGridController(droplistsFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
