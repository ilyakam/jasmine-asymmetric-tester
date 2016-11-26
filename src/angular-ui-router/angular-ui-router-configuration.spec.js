describe('routerConfiguration', function() {
  var $state;

  beforeEach(module('ui.router', function($stateProvider) {
    $state = $stateProvider;

    spyOn($state, 'state');
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

      expect($state.state)
        .toHaveBeenCalledWith(jasmine.objectContaining({
          resolve: {user: userTester}
        }));
    });
  });
});
