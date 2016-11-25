describe('ModalOpenController', function() {
  var $modal,
      controller;

  beforeEach(module('jasmine-asymmetric-tester'));

  beforeEach(inject(function(
    $controller,
    _$modal_
  ) {
    $modal = _$modal_;

    spyOn($modal, 'open');

    controller = $controller('ModalOpenController', {}, {value: 'test'});
  }));

  describe('$modal.open()', function() {
    it('should resolve the value', function() {
      var valueTester = {
        asymmetricMatch: function(value) {
          return value() === controller.value;
        }
      };

      expect($modal.open)
        .toHaveBeenCalledWith(jasmine.objectContaining({
          resolve: {value: valueTester}
        }));
    });
  });
});
