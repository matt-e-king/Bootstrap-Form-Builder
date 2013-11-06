define([
       "jquery" , "underscore" , "backbone"
       , "collections/snippets" , "collections/my-form-snippets"
       , "views/tab" , "views/my-form"
       , "text!data/fields.json", "text!data/formatting.json","text!data/special.json","text!data/buttons.json"
       , "text!templates/app/render.html",  "text!templates/app/about.html", "text!templates/app/renderjson.html",
], function(
  $, _, Backbone
  , SnippetsCollection, MyFormSnippetsCollection
  , TabView, MyFormView
  , fieldsJSON, formattingJSON, specialJSON, buttonsJSON
  , renderTab, aboutTab, jsonTab
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
        title: "Special"
        , collection: new SnippetsCollection(JSON.parse(specialJSON))
      });
      new TabView({
        title: "Buttons"
        , collection: new SnippetsCollection(JSON.parse(buttonsJSON))
      });
      new TabView({
        title: "Rendered"
        , content: renderTab
      });
      new TabView({
        title: "JSON"
        , content: jsonTab
      })
      /*new TabView({
        title: "About"
        , content: aboutTab
      });*/

      $('#drag-drop-components').affix({
        offset: {
          top: 125
        }
      });
      //Make the first tab active!
      $(".tab-pane").first().addClass("active");
      $("ul.nav li").first().addClass("active");


      var formView = new MyFormView({
          title: "Original"
          , collection: new MyFormSnippetsCollection( [
          { "title" : "Form Settings"
            , "build" : false
            , "render" : true
            , "fields": {
              "name" : {
                "label"   : "Ignore"
                , "type"  : "ignore"
                , "value" : "Form Settings"
              },
              "date": {
              "label": "Date Fields",
              "type": "checkbox",
              "value": false
              }
            }
          }
        ] )
      });


      $('#loadJSON').on('click', function() {

        var value = $("#jsonrender").val();

        var json = $.parseJSON( value );

        //console.log(json);

        formView.collection = new MyFormSnippetsCollection( json );

        formView.initialize();
          

      });


      // Bootstrap "My Form" with 'Form Name' snippet.

    }
  }
});
