define(function(require) {
  var formname               = require('text!templates/snippet/formname.html')
  , prependedtext            = require('text!templates/snippet/prependedtext.html')
  , search                   = require('text!templates/snippet/searchinput.html')
  , textinput                = require('text!templates/snippet/textinput.html')
  , appendedcheckbox         = require('text!templates/snippet/appendedcheckbox.html')
  , appendedtext             = require('text!templates/snippet/appendedtext.html')
  , filebutton               = require('text!templates/snippet/filebutton.html')
  , button                   = require('text!templates/snippet/button.html')
  , buttondouble             = require('text!templates/snippet/buttondouble.html')
  , buttondropdown           = require('text!templates/snippet/buttondropdown.html')
  , emailfield               = require('text!templates/snippet/emailfield.html')
  , multiplecheckboxes       = require('text!templates/snippet/multiplecheckboxes.html')
  , multiplecheckboxesinline = require('text!templates/snippet/multiplecheckboxesinline.html')
  , multipleradios           = require('text!templates/snippet/multipleradios.html')
  , multipleradiosinline     = require('text!templates/snippet/multipleradiosinline.html')
  , paragraph                = require('text!templates/snippet/paragraph.html')
  , passwordinput            = require('text!templates/snippet/passwordinput.html')
  , prependedcheckbox        = require('text!templates/snippet/prependedcheckbox.html')
  , prependedtext            = require('text!templates/snippet/prependedtext.html')
  , searchinput              = require('text!templates/snippet/searchinput.html')
  , selectbasic              = require('text!templates/snippet/selectbasic.html')
  , selectmultiple           = require('text!templates/snippet/selectmultiple.html')
  , space                    = require('text!templates/snippet/space.html')
  , subheading               = require('text!templates/snippet/subheading.html')
  , subheadingwithparagraph  = require('text!templates/snippet/subheadingwithparagraph.html')
  , textarea                 = require('text!templates/snippet/textarea.html')
  , textinput                = require('text!templates/snippet/textinput.html');

  return {
    formname                   : formname
    , prependedtext            : prependedtext
    , search                   : search
    , textinput                : textinput
    , appendedcheckbox         : appendedcheckbox
    , appendedtext             : appendedtext
    , filebutton               : filebutton
    , singlebutton             : button
    , doublebutton             : buttondouble
    , buttondropdown           : buttondropdown
    , emailfield               : emailfield
    , multiplecheckboxes       : multiplecheckboxes
    , multiplecheckboxesinline : multiplecheckboxesinline
    , multipleradios           : multipleradios
    , multipleradiosinline     : multipleradiosinline
    , paragraph                : paragraph
    , passwordinput            : passwordinput
    , prependedcheckbox        : prependedcheckbox
    , prependedtext            : prependedtext
    , searchinput              : searchinput
    , selectbasic              : selectbasic
    , selectmultiple           : selectmultiple
    , space                    : space
    , subheading               : subheading
    , subheadingwithparagraph  : subheadingwithparagraph
    , textarea                 : textarea
    , textinput                : textinput
  }
});
