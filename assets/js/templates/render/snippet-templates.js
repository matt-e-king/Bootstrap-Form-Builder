define(function(require) {
  var formsettings               = require('text!templates/render/formsettings.html')
  , space                     = require('text!templates/render/space.html')
  , datefield                     = require('text!templates/render/datefield.html');

  return {
    formsettings                : formsettings
    , space                     : space
    , datefield                 : datefield
  }
});
