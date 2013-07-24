define(function(require) {
  var formsettings           = require('text!templates/snippet/formsettings.html')
  , javascript               = require('text!templates/snippet/javascript.html')
  , textinput                = require('text!templates/snippet/textinput.html')
  , button                   = require('text!templates/snippet/button.html')
  , datefield                = require('text!templates/snippet/datefield.html')
  , emailfield               = require('text!templates/snippet/emailfield.html')
  , confirmationcheckbox     = require('text!templates/snippet/confirmationcheckbox.html')
  , multiplecheckboxes       = require('text!templates/snippet/multiplecheckboxes.html')
  , multiplecheckboxesinline = require('text!templates/snippet/multiplecheckboxesinline.html')
  , multipleradios           = require('text!templates/snippet/multipleradios.html')
  , multipleradiosinline     = require('text!templates/snippet/multipleradiosinline.html')
  , paragraph                = require('text!templates/snippet/paragraph.html')
  , selectbasic              = require('text!templates/snippet/selectbasic.html')
  , space                    = require('text!templates/snippet/space.html')
  , subheading               = require('text!templates/snippet/subheading.html')
  , subheadingwithparagraph  = require('text!templates/snippet/subheadingwithparagraph.html')
  , textarea                 = require('text!templates/snippet/textarea.html')
  , textinput                = require('text!templates/snippet/textinput.html');

  return {
    formsettings               : formsettings
    , javascript               : javascript
    , textinput                : textinput
    , singlebutton             : button
    , datefield                : datefield
    , emailfield               : emailfield
    , confirmationcheckbox     : confirmationcheckbox
    , multiplecheckboxes       : multiplecheckboxes
    , multiplecheckboxesinline : multiplecheckboxesinline
    , multipleradios           : multipleradios
    , multipleradiosinline     : multipleradiosinline
    , paragraph                : paragraph
    , selectbasic              : selectbasic
    , space                    : space
    , subheading               : subheading
    , subheadingwithparagraph  : subheadingwithparagraph
    , textarea                 : textarea
    , textinput                : textinput
  }
});
