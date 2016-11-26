describe('routeConfiguration', function() {
  var $route;

  beforeEach(module('ngRoute', function($routeProvider) {
    $route = $routeProvider;

    spyOn($route, 'when');
  }));

  beforeEach(function() {
    module('jasmine-asymmetric-tester');

    inject();
  });

  describe('rootState', function() {
    it('should resolve the user', function() {
      var userTester = {
        asymmetricMatch: function(user) {
          return user() === 'user_id';
        }
      };

      expect($route.when)
        .toHaveBeenCalledWith('/', jasmine.objectContaining({
          resolve: {user: userTester}
        }));
    });
  });
});
