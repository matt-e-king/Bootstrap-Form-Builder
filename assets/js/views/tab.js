define([
       'jquery', 'underscore', 'backbone'
       , "text!templates/app/tab-nav.html"

], function($, _, Backbone,
           _tabNavTemplate){
  return Backbone.View.extend({
    tagName: "div"
    , className: "tab-pane"
    , initialize: function() {
      //pulling in the title attribute from app.js new TabView call
      this.id = this.options.title.toLowerCase().replace(/\W/g,'');
      this.tabNavTemplate = _.template(_tabNavTemplate);
      this.render();
    }
    , render: function(){
      // Render Snippet Views
      var that = this;
      //the tabs can be made up of two things 
      //HTML content or a collection, this if statement is checking what the 
      //view is made of
      if (that.collection !== undefined) {
        
        _.each(this.collection.renderAll(), function(snippet){

          that.$el.append(snippet);

        });
      } else if (that.options.content){
        that.$el.append(that.options.content);
      }
      // Render & append just the tabs navigation at the top of the forms on the right
      $(".nav.nav-tabs").append(this.tabNavTemplate({title: this.options.title, id: this.id}))

      // Render tab
      this.$el.attr("id", this.id);
      this.$el.appendTo(".tab-content");
      this.delegateEvents();
    }
  });
});
