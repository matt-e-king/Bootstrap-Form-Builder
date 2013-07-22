define(function(require) {
  var paragraph               = require('text!templates/build/paragraph.html')
  , space                     = require('text!templates/build/space.html')
  , javascript                = require('text!templates/build/javascript.html')
  , singlebutton              = require('text!templates/build/button.html');

  return {
    paragraph                   : paragraph
    , space                     : space
    , javascript                : javascript
    , singlebutton              : singlebutton
  }
});
