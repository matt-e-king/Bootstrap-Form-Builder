define([
       "jquery" , "underscore" , "backbone"
       , "models/snippet"
       , "collections/snippets" 
       , "views/my-form-snippet"
], function(
  $, _, Backbone
  , SnippetModel
  , SnippetsCollection
  , MyFormSnippetView
){
  return SnippetsCollection.extend({
    model: SnippetModel
    , renderAllInitial: function(){
      return this.map(function(snippet){
        return new MyFormSnippetView({model: snippet}).render("initial");
      })
    }
    , renderAll: function(){
      return this.map(function(snippet){
        return new MyFormSnippetView({model: snippet}).render("with attributes");
      })
    }
    , renderAllClean: function(){
      return this.map(function(snippet){
        return new MyFormSnippetView({model: snippet}).render("no attributes");
      });
    }
    , renderAllRendered: function(){
      return this.map(function(snippet){
        return new MyFormSnippetView({model: snippet}).render("render");
      });
    }
  });
});
