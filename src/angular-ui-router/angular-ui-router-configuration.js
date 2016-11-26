(function() {
  function routerConfiguration($stateProvider) {
    var rootState = {
      name: 'root',

      resolve: {
        user: function() {
          return 'user_id';
        }
      }
    };

    $stateProvider.state(rootState);
  }

  angular
    .module('jasmine-asymmetric-tester')
    .config(routerConfiguration);
})();
