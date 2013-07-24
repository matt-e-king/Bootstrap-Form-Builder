define(function(require) {
  var formsettings            = require('text!templates/build/formsettings.html')
  , paragraph                 = require('text!templates/build/paragraph.html')
  , space                     = require('text!templates/build/space.html')
  , singlebutton              = require('text!templates/build/button.html');

  return {
    formsettings                : formsettings
    , paragraph                 : paragraph
    , space                     : space
    , singlebutton              : singlebutton
  }
});
