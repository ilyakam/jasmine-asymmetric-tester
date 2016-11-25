(function() {
  function ModalOpenController($modal) {
    var _this = this;

    this.value = 'to be used in the modal';

    $modal.open({
      template: '<h1>Some Modal</h1>',

      resolve: {
        value: function() {
          return _this.value;
        }
      }
    });
  }

  angular
    .module('jasmine-asymmetric-tester')
    .controller('ModalOpenController', ModalOpenController);
})();
