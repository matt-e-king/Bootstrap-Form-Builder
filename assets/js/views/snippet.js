define([
  "jquery", "underscore", "backbone"
  , "text!templates/popover/popover-main.html"
  , "text!templates/popover/popover-input.html"
  , "text!templates/popover/popover-select.html"
  , "text!templates/popover/popover-textarea.html"
  , "text!templates/popover/popover-textarea-split.html"
  , "text!templates/popover/popover-checkbox.html"
  , "text!templates/popover/popover-ignore.html"
  , "templates/snippet/snippet-templates"
  , "templates/build/snippet-templates"
  , "templates/render/snippet-templates"
  , "bootstrap"
], function(
  $, _, Backbone
  , _PopoverMain
  , _PopoverInput
  , _PopoverSelect
  , _PopoverTextArea
  , _PopoverTextAreaSplit
  , _PopoverCheckbox
  , _PopoverIgnore
  , _snippetTemplates
  , _buildTemplates
  , _renderTemplates
){
  return Backbone.View.extend({
    tagName: "div"
    , className: "component"
    , initialize: function(){
      this.alternateBuild = this.model.alternateBuid();
      this.alternateRender = this.model.alternateRender();
      this.template = _.template(_snippetTemplates[this.model.idFriendlyTitle()])
      
      if(this.alternateBuild && !this.alternateRender) {
        this.template_build = _.template(_buildTemplates[this.model.idFriendlyTitle()])
        this.template_render = _.template(_buildTemplates[this.model.idFriendlyTitle()])
      } else if (!this.alternateBuild && this.alternateRender) {
        this.template_build = this.template;
        this.template_render = _.template(_renderTemplates[this.model.idFriendlyTitle()])
      } else if (this.alternateBuild && this.alternateRender) {
        this.template_build = _.template(_buildTemplates[this.model.idFriendlyTitle()])
        this.template_render = _.template(_renderTemplates[this.model.idFriendlyTitle()])
      } else if (!this.alternateBuild && !this.alternateRender) {
        this.template_build = this.template;
        this.template_render = this.template;
      }

      this.popoverTemplates = {
        "input" : _.template(_PopoverInput)
        , "select" : _.template(_PopoverSelect)
        , "textarea" : _.template(_PopoverTextArea)
        , "textarea-split" : _.template(_PopoverTextAreaSplit)
        , "checkbox" : _.template(_PopoverCheckbox)
        , "ignore" : _.template(_PopoverIgnore)
      }
    }
    , render: function(withAttributes){
      var that = this;
      var content = _.template(_PopoverMain)({
        "title": that.model.get("title"),
        "items" : that.model.get("fields"),
        "popoverTemplates": that.popoverTemplates
      });

      switch (withAttributes) {

        case "builder":
           return this.$el.html(

              //this is what gets rendered to the form builder on the left
                that.template_build(that.model.getValues())

            ).attr({
              "data-content"     : content
              , "data-title"     : that.model.get("title")
              , "data-trigger"   : "manual"
              , "data-html"      : true
            });
        break;

        case "render":
          return this.$el.text(
            //this is what gets rendered to the right tabs and to the rendered form
            that.template_render(that.model.getValues())
          )
        break;

        default: 
          return this.$el.html(
            //this is what gets rendered to the right tabs and to the rendered form
            that.template(that.model.getValues())
          )
      }
    }
  });
});
