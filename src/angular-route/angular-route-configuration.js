(function() {
  function routeConfiguration($routeProvider) {
    $routeProvider
      .when('/', {
        resolve: {
          user: function() {
            return 'user_id';
          }
        }
      });
  }

  angular
    .module('jasmine-asymmetric-tester')
    .config(routeConfiguration);
})();
