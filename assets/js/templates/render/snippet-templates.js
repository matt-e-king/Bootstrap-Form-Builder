define(function(require) {
  var formsettings            = require('text!templates/render/formsettings.html')
  , button                   = require('text!templates/render/button.html')
  , datefield                = require('text!templates/render/datefield.html');

  return {
    formsettings               : formsettings
    , singlebutton             : button
    , datefield                : datefield
  }
});