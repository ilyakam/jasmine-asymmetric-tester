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

  describe('ngRoute', function() {
    var ngRoute;

    beforeEach(inject(function($route) {
      ngRoute = $route;
    }));

    it('should be defined', function() {
      expect(ngRoute)
        .toBeDefined();
    });
  });

  describe('ui.router', function() {
    var uiRouter;

    beforeEach(inject(function($state) {
      uiRouter = $state;
    }));

    it('should be defined', function() {
      expect(uiRouter)
        .toBeDefined();
    });
  });
});
