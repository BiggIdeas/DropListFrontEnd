(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('DroplistDetailController', DroplistDetailController);

    DroplistDetailController.$inject = ['droplistsFactory', '$stateParams', 'SweetAlert'];

    /* @ngInject */
    function DroplistDetailController(droplistsFactory, stateParams, SweetAlert) {
        var vm = this;
        vm.save = save;
        vm.title = "View Droplists";
        activate();

        function activate() {
            var customerId = $stateParams.id;

            if (customerId) {
                vm.title = "New Droplist";
                droplistsFactory
                    .getById(droplistId)
                    .then(function(droplist) {
                        vm.droplist = droplist;
                    })
                    .catch(function(error) {
                        alert(error);
                    });
            }
        }

        function save() {
            var customerId = $stateParams.id;

            if (droplistId) {
                droplistsFactory
                    .update(vm.droplist.droplistId, vm.droplist)
                    .then(function() {
                        SweetAlert.swal("Droplist saved!", "You did it!", "success");
                    })
            } else {
                droplistsFactory
                    .create(vm.droplist)
                    .then(function() {
                        SweetAlert.swal("Droplist saved!", "Great Job!", "success");
                    });
            }
        }
    }
})();
