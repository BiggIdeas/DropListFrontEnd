(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('DroplistGridController', DroplistGridController);

  DroplistGridController.$inject = ['droplistsFactory', 'departmentsFactory', 'sectionsFactory'];

  /* @ngInject */
  function DroplistGridController(droplistsFactory, departmentsFactory, sectionsFactory) {
    var vm = this;

    activate();

    function activate() {
      droplistsFactory
        .getAll()
        .then(function(droplists) {
          vm.droplists = droplists;
        })
        .catch(function(error) {
          console.error(error);
        });

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

    vm.filterSections = function filterSections() {
      vm.departmentSections = [];
      for (var i = 0; i < vm.sections.length; i++) {
        if (vm.sections[i].departmentId == vm.selectedDepartment.departmentId)
          vm.departmentSections.push(vm.sections[i]);
      }
    }

    vm.filterDroplists = function filterDroplists() {
      vm.filteredDroplists = [];
      for (var i = 0; i < vm.droplists.length; i++) {
        if (vm.droplists[i].sectionId == vm.selectedSection.sectionId)
          vm.filteredDroplists.push(vm.droplists[i]);
      }
    }
  }
})();
