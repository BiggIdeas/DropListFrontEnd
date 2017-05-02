(function() {
    'use strict';

    angular
        .module('app.stockers')
        .controller('stockersController', stockersController);

    stockersController.$inject = ['stockersFactory'];

    /* @ngInject */
    function stockersController(stockersFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
