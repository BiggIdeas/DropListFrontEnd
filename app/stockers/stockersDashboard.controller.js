(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('StockersDashboardController', StockersDashboardController);

    StockersDashboardController.$inject = ['stockersFactory', '$stateParams'];

    /* @ngInject */
    function StockersDashboardController(stockersFactory, $stateParams) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
