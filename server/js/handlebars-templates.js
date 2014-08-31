this["hTemplates"] = this["hTemplates"] || {};
this["hTemplates"]["example"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>I say: ";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ".</p>";
  return buffer;
  });
this["hTemplates"] = this["hTemplates"] || {};
this["hTemplates"]["top-nav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"top-nav\"><div class=\"logo\"></div><div class=\"title-block\">Resistance Movement</div><div class=\"nav\"><a href=\"#\" data=\"work\">WORK</a><a href=\"#\" data=\"about\">ABOUT</a><a href=\"#\" data=\"contact\">CONTACT</a></div></div>";
  });