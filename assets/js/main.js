//this is the configuration of require.js
require.config({
  baseUrl: "assets/js/lib/"
  , urlArgs: "bust=" +  (new Date()).getTime()
  , shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: '$.fn.popover'
    }
  }
  , paths: {
    app         : ".."
    , collections : "../collections"
    , data        : "../data"
    , models      : "../models"
    , helper      : "../helper"
    , templates   : "../templates"
    , views       : "../views"
  }
});
//this loads app.js in the app directory and runs the initialize function
require([ 'app/app'], function(app){
  app.initialize();
});
