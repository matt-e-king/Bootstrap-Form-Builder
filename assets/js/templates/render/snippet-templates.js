define(function(require) {
  var formsettings            = require('text!templates/render/formsettings.html')
  , textinput                = require('text!templates/render/textinput.html')
  , button                   = require('text!templates/render/button.html')
  , datefield                = require('text!templates/render/datefield.html')
  , emailfield               = require('text!templates/render/emailfield.html')
  , confirmationcheckbox     = require('text!templates/render/confirmationcheckbox.html')
  , multiplecheckboxes       = require('text!templates/render/multiplecheckboxes.html')
  , multiplecheckboxesinline = require('text!templates/render/multiplecheckboxesinline.html')
  , multipleradios           = require('text!templates/render/multipleradios.html')
  , multipleradiosinline     = require('text!templates/render/multipleradiosinline.html')
  , selectbasic              = require('text!templates/render/selectbasic.html')
  , textarea                 = require('text!templates/render/textarea.html');

  return {
    formsettings               : formsettings
    , textinput                : textinput
    , singlebutton             : button
    , datefield                : datefield
    , emailfield               : emailfield
    , confirmationcheckbox     : confirmationcheckbox
    , multiplecheckboxes       : multiplecheckboxes
    , multiplecheckboxesinline : multiplecheckboxesinline
    , multipleradios           : multipleradios
    , multipleradiosinline     : multipleradiosinline
    , selectbasic              : selectbasic
    , textarea                 : textarea
  }
});