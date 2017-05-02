(function() {
    'use strict';

    angular
        .module('app.stockers')
        .controller('stockersDashboardController', stockersDashboardController);

    stockersDashboardController.$inject = ['stockersFactory', '$stateParams'];

    /* @ngInject */
    function stockersDashboardController(stockersFactory, $stateParams) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
