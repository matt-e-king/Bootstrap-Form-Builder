define(function(require) {
  var paragraph               = require('text!templates/build/paragraph.html')
  , space                     = require('text!templates/build/space.html')
  , singlebutton                     = require('text!templates/build/button.html');

  return {
    paragraph                   : paragraph
    , space                     : space
    , singlebutton                     : singlebutton
  }
});
