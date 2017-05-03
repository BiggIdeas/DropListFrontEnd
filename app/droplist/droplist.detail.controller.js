(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('DroplistDetailController', DroplistDetailController);

  DroplistDetailController.$inject = ['droplistsFactory', 'departmentsFactory', 'sectionsFactory', '$stateParams'];

  /* @ngInject */
  function DroplistDetailController(droplistsFactory, departmentsFactory, sectionsFactory, stateParams) {
    var vm = this;
    vm.save = save;
    vm.title = "View Droplists";
    vm.departmentSections = [];

    activate();

    function activate() {
      // var customerId = $stateParams.id;
      //
      // if (customerId) {
      //   vm.title = "New Droplist";
      //   droplistsFactory
      //     .getById(droplistId)
      //     .then(function(droplist) {
      //       vm.droplist = droplist;
      //     })
      //     .catch(function(error) {
      //       alert(error);
      //     });
      // }
      departmentsFactory
        .getAll()
        .then(function(departments) {
          vm.departments = departments;
        })
        .catch(function(error) {
          console.error(error);
        });

        sectionsFactory
          .getAll()
          .then(function(sections) {
            vm.sections = sections;
          })
          .catch(function(error) {
            console.error(error);
          });
    }

    function save() {
      // var customerId = $stateParams.id;
      //
      // if (droplistId) {
      //   droplistsFactory
      //     .update(vm.droplist.droplistId, vm.droplist)
      //     .then(function() {
      //       SweetAlert.swal("Droplist saved!", "You did it!", "success");
      //     })
      // } else {
      //   droplistsFactory
      //     .create(vm.droplist)
      //     .then(function() {
      //       SweetAlert.swal("Droplist saved!", "Great Job!", "success");
      //     });
      // }
    }

    vm.filterSections = function filterSections(){
      vm.departmentSections = [];
      for (var i = 0; i < vm.sections.length; i++) {
        if (vm.sections[i].departmentId == vm.selectedDepartment.departmentId)
          vm.departmentSections.push(vm.sections[i]);
      }
    }
  }
})();
