define([
      'jquery', 'underscore', 'backbone'
], function($, _, Backbone) {
  return Backbone.Model.extend({
    getValues: function(){
      return _.reduce(this.get("fields"), function(o, v, k){
        if (v["type"] == "select") {
          o[k] = _.find(v["value"], function(o){return o.selected})["value"];
        } else {
          o[k]  = v["value"];
        }
        return o;
      }, {});
    }
    , idFriendlyTitle: function(){
      return this.get("title").replace(/\W/g,'').toLowerCase();
    }
    , alternateBuid: function() {
      return this.get("build");
    }
    , alternateRender: function() {
      return this.get("render");
    }
    , setField: function(name, value) {
      var fields = this.get("fields")
      fields[name]["value"] = value;
      this.set("fields", fields);
    }
  });
});
