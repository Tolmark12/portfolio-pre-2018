templates = {};
templates['about'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<p>About</p>");;return buf.join("");
};

templates['contact'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<p>Contact</p>");;return buf.join("");
};

templates['ibex'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"meta-data pure-g\"><div class=\"overview pure-u-5-12\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div><div class=\"my-role pure-u-1-8\"><ul><li>Design</li><li>Illustration</li><li>Photography</li></ul></div><div class=\"collaborators pure-u-1-8\"><ul><li>Neha Tembey - Design</li><li>Jason Campbell - Design</li></ul></div><div class=\"client pure-u-1-4\">Resistance Movement Movie</div></div>");;return buf.join("");
};

templates['justin_bw_v1'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"justin-bw-v1\"><div class=\"meta-data pure-g\"><div class=\"overview pure-u-5-12\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</div><div class=\"my-role pure-u-1-4\"><ul><li>Design</li><li>Illustration</li></ul></div><div class=\"client pure-u-1-4\">Resistance Movement Movie</div></div><div class=\"pure-g\"><div class=\"pure-u-5-12 cover\"><img src=\"/assets/justin-bw-v1/cd-cover.jpg\"/></div><div class=\"pure-u-7-12 shirt\"><img src=\"/assets/justin-bw-v1/shirt.jpg\"/></div></div><div class=\"pure-g inside-spread\"><img src=\"/assets/justin-bw-v1/cd-inside.jpg\"/></div><div class=\"pure-g free-and-site\"><div class=\"pure-u-1-3 free-download\"><img src=\"/assets/justin-bw-v1/download-front.gif\" class=\"front\"/><img src=\"/assets/justin-bw-v1/download-back.jpg\" class=\"back\"/></div><div class=\"pure-u-2-3 site\"><img src=\"/assets/justin-bw-v1/site.jpg\"/></div></div></div>");;return buf.join("");
};

templates['mfa'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"mfa\"><div class=\"meta-data pure-g\"><div class=\"overview pure-u-5-12\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</div><div class=\"my-role pure-u-1-4\"><ul><li>Design</li><li>Illustration</li></ul></div><div class=\"client pure-u-1-4\">Resistance Movement Movie</div></div><div class=\"pure-g\"><div class=\"pure-u-9-24 poster\"><img src=\"/assets/mfa/mfa_poster5.jpg\"/></div><div class=\"pure-u-13-24\"><img src=\"/assets/mfa/books1.jpg\"/></div></div></div>");;return buf.join("");
};

templates['overlay-nav'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (DataVo) {
buf.push("<div class=\"overlay\"><div class=\"overlay-nav\"><div class=\"right\"><svg x=\"0px\" y=\"0px\" width=\"33.799px\" height=\"56.145px\"><polyline fill=\"none\" stroke=\"#80D2E9\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"4.343,2.989 29.98,28.625 4.343,54.262\"></polyline></svg></div><div class=\"left\"><svg x=\"0px\" y=\"0px\" width=\"33.799px\" height=\"56.145px\"><polyline fill=\"none\" stroke=\"#80D2E9\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"29.98,2.989 4.343,28.625 29.98,54.262 \"></polyline></svg></div></div><div class=\"map\">");
// iterate DataVo.projectsGrid
;(function(){
  var $$obj = DataVo.projectsGrid;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var row = $$obj[index];

buf.push("<div class=\"row\">");
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var project = $$obj[index];

buf.push("<div" + (jade.attr("onclick", "PubSub.publish( 'CHANGE_PAGE', { pageId:'" + project.id + "'} )", true, false)) + (jade.cls(['project',project.id], [null,true])) + "> </div>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var project = $$obj[index];

buf.push("<div" + (jade.attr("onclick", "PubSub.publish( 'CHANGE_PAGE', { pageId:'" + project.id + "'} )", true, false)) + (jade.cls(['project',project.id], [null,true])) + "> </div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var row = $$obj[index];

buf.push("<div class=\"row\">");
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var project = $$obj[index];

buf.push("<div" + (jade.attr("onclick", "PubSub.publish( 'CHANGE_PAGE', { pageId:'" + project.id + "'} )", true, false)) + (jade.cls(['project',project.id], [null,true])) + "> </div>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var project = $$obj[index];

buf.push("<div" + (jade.attr("onclick", "PubSub.publish( 'CHANGE_PAGE', { pageId:'" + project.id + "'} )", true, false)) + (jade.cls(['project',project.id], [null,true])) + "> </div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");}.call(this,"DataVo" in locals_for_with?locals_for_with.DataVo:typeof DataVo!=="undefined"?DataVo:undefined));;return buf.join("");
};

templates['pagoda_dash'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

;return buf.join("");
};

templates['pagoda_site'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

;return buf.join("");
};

templates['playmill'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"playmill\"><div class=\"meta-data pure-g\"><div class=\"overview pure-u-5-12\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div><div class=\"my-role pure-u-1-4\"><ul><li>Design</li><li>Illustration</li></ul></div><div class=\"client pure-u-1-4\">Resistance Movement Movie</div></div><div class=\"descript\">Initial Theatrical Production Announcement Poster - <span>Production began as a play and was later adapted to film. Play centered around BBC Radio Broadcasts.</span></div><div class=\"play-poster\"> <img src=\"/assets/playmill/all2.jpg\"/></div><div class=\"descript\">In Movie Poster Props - <span>Printed and used on  set ito evoke WWII German propaganda posters</span></div><div class=\"pure-g resist\"><div class=\"pure-u-1-3 lies\"></div><div class=\"pure-u-1-3 enemy\"></div><div class=\"pure-u-1-3 leaflet\"></div></div></div>");;return buf.join("");
};

templates['portfolio'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (DataVo) {
buf.push("<div class=\"portfolio-index\">");
// iterate DataVo.projectsGrid
;(function(){
  var $$obj = DataVo.projectsGrid;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var row = $$obj[index];

buf.push("<div class=\"row\">");
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var project = $$obj[index];

buf.push("<div" + (jade.attr("onclick", "PubSub.publish( 'CHANGE_PAGE', { pageId:'" + project.id + "'} )", true, false)) + (jade.cls(['project',project.id], [null,true])) + "> </div>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var project = $$obj[index];

buf.push("<div" + (jade.attr("onclick", "PubSub.publish( 'CHANGE_PAGE', { pageId:'" + project.id + "'} )", true, false)) + (jade.cls(['project',project.id], [null,true])) + "> </div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var row = $$obj[index];

buf.push("<div class=\"row\">");
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var project = $$obj[index];

buf.push("<div" + (jade.attr("onclick", "PubSub.publish( 'CHANGE_PAGE', { pageId:'" + project.id + "'} )", true, false)) + (jade.cls(['project',project.id], [null,true])) + "> </div>");
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var project = $$obj[index];

buf.push("<div" + (jade.attr("onclick", "PubSub.publish( 'CHANGE_PAGE', { pageId:'" + project.id + "'} )", true, false)) + (jade.cls(['project',project.id], [null,true])) + "> </div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");}.call(this,"DataVo" in locals_for_with?locals_for_with.DataVo:typeof DataVo!=="undefined"?DataVo:undefined));;return buf.join("");
};

templates['resistance'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"resistance\"><div class=\"meta-data pure-g\"><div class=\"overview pure-u-5-12\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div><div class=\"my-role pure-u-1-4\"><ul><li>Design</li><li>Illustration</li></ul></div><div class=\"client pure-u-1-4\">Resistance Movement Movie</div></div><div class=\"play-poster\"> <img src=\"/assets/resistance/walking-by-play-poster-3.jpg\"/></div><div class=\"descript\">Initial Theatrical Production Announcement Poster - <span>Production began as a play and was later adapted to film. Play centered around BBC Radio Broadcasts.</span></div><div class=\"play-poster\"> <img src=\"/assets/resist-play-poster.jpg\"/></div><div class=\"descript\">In Movie Poster Props - <span>Printed and used on  set ito evoke WWII German propaganda posters</span></div><div class=\"pure-g resist\"><div class=\"pure-u-1-3 lies\"></div><div class=\"pure-u-1-3 enemy\"></div><div class=\"pure-u-1-3 leaflet\"></div></div></div>");;return buf.join("");
};

templates['top-nav'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"top-nav\"><div data=\"portfolio\" class=\"logo clickable\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"35.138px\" height=\"23.489px\" viewbox=\"0 0 35.138 23.489\" style=\"enable-background: new 0 0 35.138 23.489;\" xml:space=\"preserve\"><polygon points=\"0,23.489 12.762,1.385 25.524,23.489 \" class=\"st1\"></polygon><circle cx=\"31.95\" cy=\"20.302\" r=\"3.188\" class=\"st0\"></circle></svg></div><div class=\"title-block\"><div class=\"title\"></div><div class=\"subtitle\"></div></div><div class=\"nav\"><a data=\"portfolio\" class=\"clickable\">WORK</a><a data=\"about\" class=\"clickable\">ABOUT</a><a data=\"contact\" class=\"clickable\">CONTACT</a></div></div>");;return buf.join("");
};

templates['video'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (file, vidName) {
jade_mixins["video"](file);
buf.push("<video loop=\"\" autoplay=\"\"><source" + (jade.attr("src", "assets/" + (vidName) + ".webm", true, false)) + " type=\"video/webm; codecs=&quot;vp8.0, vorbis&quot;\"/><source" + (jade.attr("src", "assets/" + (vidName) + ".mp4", true, false)) + " type=\"video/mp4;codecs=&quot;avc1.42E01E, mp4a.40.2&quot;\"/></video>");}.call(this,"file" in locals_for_with?locals_for_with.file:typeof file!=="undefined"?file:undefined,"vidName" in locals_for_with?locals_for_with.vidName:typeof vidName!=="undefined"?vidName:undefined));;return buf.join("");
};
