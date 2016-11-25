describe('jasmine-asymmetric-tester', function() {
  beforeEach(module('jasmine-asymmetric-tester'));

  describe('mm.foundation', function() {
    var mmFoundation;

    beforeEach(inject(function($modal) {
      mmFoundation = $modal;
    }));

    it('should be defined', function() {
      expect(mmFoundation)
        .toBeDefined();
    });
  });
});
