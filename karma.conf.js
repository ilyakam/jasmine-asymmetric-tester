module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    colors: true,
    frameworks: ['jasmine'],
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['dots'],
    singleRun: true,

    files: [
      'build/javascript/vendor.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.js'
    ]
  });
};
