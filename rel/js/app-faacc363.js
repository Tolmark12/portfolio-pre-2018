templates={},templates.ibex=function(){var t=[];return t.push("<p>IBEX</p>"),t.join("")},templates.portfolio=function(t){var e=[],n=t||{};return function(t){e.push('<div class="portfolio-index">'),function(){var n=t.portfolio;if("number"==typeof n.length)for(var i=0,a=n.length;a>i;i++){var o=n[i];e.push("<div"+jade.attr("onclick","PubSub.publish( 'CHANGE_PAGE', { pageId:'"+o.id+"'} )",!0,!1)+jade.cls(["project",o.id],[null,!0])+"> </div>")}else{var a=0;for(var i in n){a++;var o=n[i];e.push("<div"+jade.attr("onclick","PubSub.publish( 'CHANGE_PAGE', { pageId:'"+o.id+"'} )",!0,!1)+jade.cls(["project",o.id],[null,!0])+"> </div>")}}}.call(this),e.push("</div>")}.call(this,"DataVo"in n?n.DataVo:"undefined"!=typeof DataVo?DataVo:void 0),e.join("")},templates.resistance=function(){var t=[];return t.push("<p>resist!</p>"),t.join("")},templates["top-nav"]=function(){var t=[];return t.push('<div class="top-nav"><div data="portfolio" class="logo clickable"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35.138px" height="23.489px" viewbox="0 0 35.138 23.489" style="enable-background: new 0 0 35.138 23.489;" xml:space="preserve"><polygon points="0,23.489 12.762,1.385 25.524,23.489 " class="st1"></polygon><circle cx="31.95" cy="20.302" r="3.188" class="st0"></circle></svg></div><div class="title-block"></div><div class="nav"><a data="portfolio" class="clickable">WORK</a><a data="about" class="clickable">ABOUT</a><a data="contact" class="clickable">CONTACT</a></div></div>'),t.join("")};var Portfolio;Portfolio=function(){function t(t){this.$el=t,this.build()}return t.prototype.build=function(){return this.nav=new TopNav(this.$el),this.content=new ContentArea($(".content",this.$el)),this.window=new Window},t}(),Portfolio=Portfolio;var ContentArea;ContentArea=function(){function t(t){this.$el=t,this.$el.css({opacity:0}),PubSub.subscribe("CHANGE_CONTENT",function(t){return function(e,n){return t.changePage(n.pageId)}}(this))}return t.prototype.changePage=function(t){return t!==this.currentPage?null!=this.currentPage?this.unloadCurrentPage(t):this.loadPage(t):void 0},t.prototype.unloadCurrentPage=function(t){return this.$el.animate({opacity:0},{duration:200,complete:function(e){return function(){return e.loadPage(t)}}(this)})},t.prototype.loadPage=function(t){var e,n;return this.currentPage=t,this.$el.empty(),n=templates[t](),e=$(n),this.$el.append(e),this.$el.animate({opacity:1},{duration:400})},t}();var DataVo;DataVo=function(){function t(){}return t.pages={"/":{id:"portfolio",title:""},portfolio:{id:"portfolio",title:""},resistance:{id:"resistance",title:"Resistance Movement"},ibex:{id:"ibex",title:"IBEX"}},t.portfolio=[t.pages.resistance,t.pages.resistance,t.pages.resistance,t.pages.resistance,t.pages.resistance,t.pages.resistance,t.pages.ibex],t}();var TopNav;TopNav=function(){function t(t){var e;e=templates["top-nav"](),this.$node=$(e),t.prepend(this.$node),PubSub.subscribe("CHANGE_CONTENT",function(t){return function(e,n){return t.changePageTitleTxt(DataVo.pages[n.pageId].title)}}(this)),PubSub.subscribe("NAV_CLICK",this.onNavItemClick),$(".clickable",this.$node).on("click",function(){return function(e){return t=$(e.currentTarget),PubSub.publish("NAV_CLICK",{id:t.attr("data"),el:t})}}(this))}return t.prototype.onNavItemClick=function(t,e){return PubSub.publish("CHANGE_PAGE",{pageId:e.id})},t.prototype.changePageTitleTxt=function(t){return $(".title-block",this.$node).animate({opacity:0},{duration:200,complete:function(e){return function(){return $(".title-block",e.$node).text(t),$(".title-block",e.$node).animate({opacity:1},{duration:200})}}(this)})},t}();var Window,__bind=function(t,e){return function(){return t.apply(e,arguments)}};Window=function(){function t(){this.onWindowStateChange=__bind(this.onWindowStateChange,this),PubSub.subscribe("CHANGE_PAGE",function(t){return function(e,n){return t.changePage(n)}}(this)),History.Adapter.bind(window,"statechange",this.onWindowStateChange),this.loadInitialPage()}return t.prototype.changePage=function(t){var e;return e=DataVo.pages[t.pageId],History.pushState({page:e.id},e.title,"?page="+e.id)},t.prototype.onWindowStateChange=function(){var t;return t=History.getState(),PubSub.publish("CHANGE_CONTENT",{pageId:t.data.page})},t.prototype.loadInitialPage=function(){var t,e,n;return e=null!=(n=document.URL.split("?")[1])?n.split("=")[1]:void 0,t=null==e?DataVo.pages.portfolio:DataVo.pages[e],History.replaceState({page:t.id},t.title,"?page="+t.id)},t}();var portfolio;portfolio=new Portfolio($(".wrapper"));