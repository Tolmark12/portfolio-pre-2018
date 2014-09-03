templates = {};
templates['ibex'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<p>IBEX</p>");;return buf.join("");
};

templates['portfolio'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (DataVo) {
buf.push("<div class=\"portfolio-index\">");
// iterate DataVo.portfolio
;(function(){
  var $$obj = DataVo.portfolio;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var project = $$obj[index];

buf.push("<div" + (jade.attr("onclick", "PubSub.publish( 'CHANGE_CONTENT', { pageId:'" + project.id + "'} )", true, false)) + (jade.cls(['project',project.id], [null,true])) + "> </div>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var project = $$obj[index];

buf.push("<div" + (jade.attr("onclick", "PubSub.publish( 'CHANGE_CONTENT', { pageId:'" + project.id + "'} )", true, false)) + (jade.cls(['project',project.id], [null,true])) + "> </div>");
    }

  }
}).call(this);

buf.push("</div>");}.call(this,"DataVo" in locals_for_with?locals_for_with.DataVo:typeof DataVo!=="undefined"?DataVo:undefined));;return buf.join("");
};

templates['resistance'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<p>resist!</p>");;return buf.join("");
};

templates['top-nav'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"top-nav\"><div data=\"portfolio\" class=\"logo clickable\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"35.138px\" height=\"23.489px\" viewbox=\"0 0 35.138 23.489\" style=\"enable-background: new 0 0 35.138 23.489;\" xml:space=\"preserve\"><polygon points=\"0,23.489 12.762,1.385 25.524,23.489 \" class=\"st1\"></polygon><circle cx=\"31.95\" cy=\"20.302\" r=\"3.188\" class=\"st0\"></circle></svg></div><div class=\"title-block\"></div><div class=\"nav\"><a data=\"portfolio\" class=\"clickable\">WORK</a><a data=\"about\" class=\"clickable\">ABOUT</a><a data=\"contact\" class=\"clickable\">CONTACT</a></div></div>");;return buf.join("");
};
