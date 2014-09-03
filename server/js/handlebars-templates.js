this["hTemplates"] = this["hTemplates"] || {};
this["hTemplates"]["ibex"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>IBEX</p>";
  });
this["hTemplates"] = this["hTemplates"] || {};
this["hTemplates"]["portfolio"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"portfolio-index\">";
  if (helper = helpers.portfolioIndexProjects) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.portfolioIndexProjects); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>";
  return buffer;
  });
this["hTemplates"] = this["hTemplates"] || {};
this["hTemplates"]["resistance"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>resist!</p>";
  });
this["hTemplates"] = this["hTemplates"] || {};
this["hTemplates"]["top-nav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"top-nav\"><div data=\"portfolio\" class=\"logo clickable\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"35.138px\" height=\"23.489px\" viewbox=\"0 0 35.138 23.489\" style=\"enable-background: new 0 0 35.138 23.489;\" xml:space=\"preserve\"><polygon points=\"0,23.489 12.762,1.385 25.524,23.489 \" class=\"st1\"></polygon><circle cx=\"31.95\" cy=\"20.302\" r=\"3.188\" class=\"st0\"></circle></svg></div><div class=\"title-block\"></div><div class=\"nav\"><a data=\"portfolio\" class=\"clickable\">WORK</a><a data=\"about\" class=\"clickable\">ABOUT</a><a data=\"contact\" class=\"clickable\">CONTACT</a></div></div>";
  });