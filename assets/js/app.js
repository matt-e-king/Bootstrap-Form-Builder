define([
       "jquery" , "underscore" , "backbone"
       , "collections/snippets" , "collections/my-form-snippets"
       , "views/tab" , "views/my-form"
       , "text!data/fields.json", "text!data/formatting.json","text!data/buttons.json"
       , "text!templates/app/render.html",  "text!templates/app/about.html", 
], function(
  $, _, Backbone
  , SnippetsCollection, MyFormSnippetsCollection
  , TabView, MyFormView
  , fieldsJSON, formattingJSON, buttonsJSON
  , renderTab, aboutTab
){
  return {
    //this is the initialize function which is triggered from the main.js file
    initialize: function(){

      //Bootstrap tabs from json.
      //new a new TabView which is loading the file "views/tab.js"
      new TabView({
        title: "Fields" //sets the title of the tab in the HTML
        , collection: new SnippetsCollection(JSON.parse(fieldsJSON)) //this is calling the colleciton file snippets.js
      });
       new TabView({
        title: "Formatting"
        , collection: new SnippetsCollection(JSON.parse(formattingJSON))
      });
      new TabView({
        title: "Buttons"
        , collection: new SnippetsCollection(JSON.parse(buttonsJSON))
      });
      new TabView({
        title: "Rendered"
        , content: renderTab
      });
      /*new TabView({
        title: "About"
        , content: aboutTab
      });*/


      //Make the first tab active!
      $(".tab-pane").first().addClass("active");
      $("ul.nav li").first().addClass("active");
      // Bootstrap "My Form" with 'Form Name' snippet.
      new MyFormView({
        title: "Original"
        , collection: new MyFormSnippetsCollection(
        [
          { "title" : "Form Name"
            , "build" : false
            , "fields": {
              "name" : {
                "label"   : "Form Name"
                , "type"  : "input"
                , "value" : "Form Settings"
              }
            }
          },
          { "title": "Javascript"
            , "build" : true
            , "fields": {
              "date": {
              "label": "Date Fields",
              "type": "checkbox",
              "value": false
              }
            }
          }
        ])
      });
    }
  }
});
