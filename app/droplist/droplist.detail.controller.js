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
        vm.droplist = {
          buildingId: 1,
          driverId: 1,
          droplistName: "",
          createdOnDate: new Date(),
          stockerId: 1, //take logged in stocker id
          sectionId: 1,
          stocker_EmployeeId: 1,
          droplistItems:[]
          // droplistItems: [{
          //     aisleNumber: 101,
          //     aisleRow: 'B',
          //     aisleColumn: 15,
          //     itemNumber: 777225,
          //     description: 'chair',
          //     quantity: 100
          //   },
          //   {
          //     aisleNumber: 115,
          //     aisleRow: 'C',
          //     aisleColumn: 8,
          //     itemNumber: 55465,
          //     description: 'table',
          //     quantity: 100
          //   }
          // ]
        };

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

      vm.addItem = function addItem() {
        vm.droplist.droplistItems.push({});
      }

      function save() {
        droplistsFactory
          .create(vm.droplist)
          .then(function() {
              // var droplistId = $stateParams.id;
              //
              // if (droplistId) {
              //   droplistsFactory
              //     .update(vm.droplist.droplistId, vm.droplist)
              //     .then(function() {
              // SweetAlert.swal("Droplist saved!", "You did it!", "success");
              //     })
              // } else {
              //   console.log("print something")
              //   droplistsFactory
              //     .create(vm.droplist)
              //     .then(function() {
              // SweetAlert.swal("Droplist saved!", "Great Job!", "success");
              //     });
              // }
            });
          }

        vm.filterSections = function filterSections() {
          vm.departmentSections = [];
          for (var i = 0; i < vm.sections.length; i++) {
            if (vm.sections[i].departmentId == vm.selectedDepartment.departmentId)
              vm.departmentSections.push(vm.sections[i]);
          }
        }
      }
    })();
