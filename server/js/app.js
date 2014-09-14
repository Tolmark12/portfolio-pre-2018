var Portfolio;

Portfolio = (function() {
  function Portfolio($el) {
    this.$el = $el;
    this.build();
  }

  Portfolio.prototype.build = function() {
    DataVo.createProjectRows();
    this.nav = new TopNav(this.$el);
    this.content = new ContentArea($(".content", this.$el));
    this.window = new Window();
    return this.overlayNav = new OverlayNav(this.$el);
  };

  return Portfolio;

})();

Portfolio = Portfolio;

var ContentArea;

ContentArea = (function() {
  function ContentArea($el) {
    this.$el = $el;
    this.$el.css({
      opacity: 0
    });
    PubSub.subscribe('CHANGE_CONTENT', (function(_this) {
      return function(msg, data) {
        return _this.changePage(data.pageId);
      };
    })(this));
    PubSub.subscribe('NEXT_PROJECT', (function(_this) {
      return function(msg, data) {
        return _this.nextProject();
      };
    })(this));
    PubSub.subscribe('PREV_PROJECT', (function(_this) {
      return function(msg, data) {
        return _this.prevProject();
      };
    })(this));
  }

  ContentArea.prototype.changePage = function(page) {
    if (page === this.currentPage) {
      return;
    }
    if (this.currentPage != null) {
      return this.unloadCurrentPage(page);
    } else {
      return this.loadPage(page);
    }
  };

  ContentArea.prototype.unloadCurrentPage = function(newPage) {
    return this.$el.animate({
      opacity: 0
    }, {
      duration: 200,
      complete: (function(_this) {
        return function() {
          return _this.loadPage(newPage);
        };
      })(this)
    });
  };

  ContentArea.prototype.loadPage = function(page) {
    var $node, node;
    this.currentPage = page;
    this.$el.empty();
    node = templates[page]();
    $node = $(node);
    this.$el.append($node);
    this.$el.animate({
      opacity: 1
    }, {
      duration: 400
    });
    return $("html, body").scrollTop(0);
  };

  ContentArea.prototype.nextProject = function() {
    var newProjectIndex;
    newProjectIndex = DataVo.getIndexOfProject(this.currentPage) + 1;
    if (newProjectIndex < DataVo.portfolio.length) {
      return PubSub.publish('CHANGE_PAGE', {
        pageId: DataVo.portfolio[newProjectIndex].id
      });
    }
  };

  ContentArea.prototype.prevProject = function() {
    var newProjectIndex;
    newProjectIndex = DataVo.getIndexOfProject(this.currentPage) - 1;
    if (newProjectIndex > -1) {
      return PubSub.publish('CHANGE_PAGE', {
        pageId: DataVo.portfolio[newProjectIndex].id
      });
    }
  };

  return ContentArea;

})();

var DataVo;

DataVo = (function() {
  function DataVo() {}

  DataVo.emptyPage = {
    id: "empty",
    title: ""
  };

  DataVo.pages = {
    "/": {
      id: "portfolio",
      title: ""
    },
    about: {
      id: "about",
      title: ""
    },
    contact: {
      id: "contact",
      title: ""
    },
    portfolio: {
      id: "portfolio",
      title: ""
    },
    resistance: {
      id: "resistance",
      title: "Resistance Movement"
    },
    ibex: {
      id: "ibex",
      title: "Ibex"
    },
    playmill: {
      id: "playmill",
      title: "Playmill"
    },
    mfa: {
      id: "mfa",
      title: "MFA Thesis"
    },
    pagoda_site: {
      id: "pagoda_site",
      title: "Pagoda Box",
      subtitle: "Front Site"
    },
    pagoda_dash: {
      id: "pagoda_dash",
      title: "Pagoda Box",
      subtitle: "Dashboard"
    },
    justin_bw_v1: {
      id: "justin_bw_v1",
      title: "Justin Cash",
      subtitle: "BW - First Release"
    },
    logos: {
      id: "logos",
      title: "Various Logos"
    }
  };

  DataVo.portfolio = [DataVo.pages.playmill, DataVo.pages.mfa, DataVo.pages.justin_bw_v1, DataVo.pages.pagoda_dash, DataVo.pages.resistance, DataVo.pages.pagoda_site, DataVo.pages.logos];

  DataVo.createProjectRows = function() {
    var ar, count, project, totalColumns, _i, _len, _ref;
    DataVo.projectsGrid = [];
    count = 0;
    ar = [];
    totalColumns = 4;
    _ref = this.portfolio;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      project = _ref[_i];
      ar.push(project);
      if (++count === totalColumns) {
        console.log("aa");
        DataVo.projectsGrid.push(ar);
        count = 0;
        ar = [];
      }
    }
    while (count++ < totalColumns) {
      ar.push(this.emptyPage);
    }
    return DataVo.projectsGrid.push(ar);
  };

  DataVo.getIndexOfProject = function(projectId) {
    var i, project, _i, _len, _ref;
    _ref = DataVo.portfolio;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      project = _ref[i];
      if (projectId === project.id) {
        return i;
      }
    }
  };

  DataVo.pageIsPortfolioProject = function(projectId) {
    var project, _i, _len, _ref;
    _ref = this.portfolio;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      project = _ref[_i];
      if (project.id === projectId) {
        return true;
      }
    }
    return false;
  };

  return DataVo;

})();



var OverlayNav,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

OverlayNav = (function() {
  function OverlayNav() {
    this.onKeyPress = __bind(this.onKeyPress, this);
    this.onScroll = __bind(this.onScroll, this);
    var node;
    node = templates['overlay-nav']();
    this.$node = $(node);
    this.$window = $(window);
    $('body').append(this.$node);
    this.$node.css({
      opacity: 0
    });
    this.$map = $(".map", this.$node);
    $('.right', this.$node).on("click", (function(_this) {
      return function() {
        return PubSub.publish('NEXT_PROJECT');
      };
    })(this));
    $('.left', this.$node).on("click", (function(_this) {
      return function() {
        return PubSub.publish('PREV_PROJECT');
      };
    })(this));
    $('.left, .right', this.$node).on("mouseover", (function(_this) {
      return function() {
        return _this.showCenter();
      };
    })(this));
    $('.left, .right', this.$node).on("mouseout", (function(_this) {
      return function() {
        return _this.hideCenter();
      };
    })(this));
    PubSub.subscribe('CHANGE_CONTENT', (function(_this) {
      return function(msg, data) {
        return _this.onChangePage(data.pageId);
      };
    })(this));
    this.hide();
    this.hideCenter(0);
  }

  OverlayNav.prototype.onScroll = function() {
    var curPos, diff;
    curPos = this.$window.scrollTop();
    diff = this.lastPosition - curPos;
    if (curPos < 0) {
      this.lastPosition = 0;
      return;
    }
    if (diff > 10) {
      this.show();
    } else if (diff < -1) {
      this.hide();
    }
    return this.lastPosition = curPos;
  };

  OverlayNav.prototype.show = function() {
    if (this.isHidden) {
      this.$node.stop(true);
      this.$node.css({
        display: "block"
      });
      this.$node.animate({
        opacity: 1
      }, {
        duration: 500
      });
      return this.isHidden = false;
    }
  };

  OverlayNav.prototype.hide = function() {
    if (!this.isHidden) {
      this.$node.stop(true);
      this.$node.animate({
        opacity: 0
      }, {
        duration: 300
      });
      return this.isHidden = true;
    }
  };

  OverlayNav.prototype.showCenter = function() {
    this.$map.stop(true);
    this.$map.css({
      display: "block"
    });
    return this.$map.animate({
      opacity: 1
    }, {
      duration: 200
    });
  };

  OverlayNav.prototype.hideCenter = function(speed) {
    if (speed == null) {
      speed = 200;
    }
    this.$map.stop(true);
    return this.$map.animate({
      opacity: 0
    }, {
      duration: speed,
      complete: (function(_this) {
        return function() {
          return _this.$map.css({
            display: "none"
          });
        };
      })(this)
    });
  };

  OverlayNav.prototype.onChangePage = function(pageId) {
    if (!DataVo.pageIsPortfolioProject(pageId)) {
      this.hide();
      this.stopScrollListening();
      return this.stopKeyPressListening();
    } else {
      this.activatePage(pageId);
      this.listenForScroll();
      return this.listenForKeyPress();
    }
  };

  OverlayNav.prototype.activatePage = function(pageId) {
    var _ref;
    if ((_ref = this.activePage) != null) {
      _ref.removeClass("active");
    }
    this.activePage = $("." + pageId, this.$node);
    return this.activePage.addClass("active visited");
  };

  OverlayNav.prototype.listenForScroll = function() {
    return this.$window.on("scroll", this.onScroll);
  };

  OverlayNav.prototype.stopScrollListening = function() {
    return this.$window.off("scroll", this.onScroll);
  };

  OverlayNav.prototype.listenForKeyPress = function() {
    return $(document).on("keydown", this.onKeyPress);
  };

  OverlayNav.prototype.stopKeyPressListening = function() {
    return $(document).off("keydown", this.onKeyPress);
  };

  OverlayNav.prototype.onKeyPress = function(e) {
    switch (e.which) {
      case 37:
        return PubSub.publish('PREV_PROJECT');
      case 39:
        return PubSub.publish('NEXT_PROJECT');
    }
  };

  return OverlayNav;

})();

var TopNav;

TopNav = (function() {
  function TopNav($el) {
    var node;
    node = templates['top-nav']();
    this.$node = $(node);
    $el.prepend(this.$node);
    PubSub.subscribe('CHANGE_CONTENT', (function(_this) {
      return function(msg, data) {
        return _this.changePageTitleTxt(DataVo.pages[data.pageId].title, DataVo.pages[data.pageId].subtitle);
      };
    })(this));
    PubSub.subscribe('NAV_CLICK', this.onNavItemClick);
    $(".clickable", this.$node).on("click", (function(_this) {
      return function(e) {
        $el = $(e.currentTarget);
        return PubSub.publish('NAV_CLICK', {
          id: $el.attr('data'),
          el: $el
        });
      };
    })(this));
  }

  TopNav.prototype.onNavItemClick = function(m, data) {
    return PubSub.publish('CHANGE_PAGE', {
      pageId: data.id
    });
  };

  TopNav.prototype.changePageTitleTxt = function(title, subtitle) {
    return $('.title-block', this.$node).animate({
      opacity: 0
    }, {
      duration: 200,
      complete: (function(_this) {
        return function() {
          $('.title', _this.$node).text(title);
          $('.title-block', _this.$node).animate({
            opacity: 1
          }, {
            duration: 200
          });
          if (subtitle != null) {
            $('.subtitle', _this.$node).text(subtitle);
            return $('.subtitle', _this.$node).css({
              display: "inline-block"
            });
          } else {
            $('.subtitle', _this.$node).text("");
            return $('.subtitle', _this.$node).css({
              display: "none"
            });
          }
        };
      })(this)
    });
  };

  return TopNav;

})();

var Window,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Window = (function() {
  function Window() {
    this.onWindowStateChange = __bind(this.onWindowStateChange, this);
    this.defaultPage = 'resistance';
    PubSub.subscribe('CHANGE_PAGE', (function(_this) {
      return function(msg, data) {
        return _this.changePage(data);
      };
    })(this));
    History.Adapter.bind(window, 'statechange', this.onWindowStateChange);
    this.loadInitialPage();
  }

  Window.prototype.changePage = function(data) {
    var obj;
    obj = DataVo.pages[data.pageId];
    return History.pushState({
      page: obj.id
    }, obj.title, "?page=" + obj.id);
  };

  Window.prototype.onWindowStateChange = function() {
    var state;
    state = History.getState();
    return PubSub.publish('CHANGE_CONTENT', {
      pageId: state.data.page
    });
  };

  Window.prototype.loadInitialPage = function() {
    var obj, pageId, _ref;
    pageId = (_ref = document.URL.split("?")[1]) != null ? _ref.split("=")[1] : void 0;
    obj = pageId == null ? DataVo.pages[this.defaultPage] : DataVo.pages[pageId];
    History.replaceState({
      page: obj.id
    }, obj.title, "?page=" + obj.id);
    if (true) {
      return this.onWindowStateChange();
    }
  };

  return Window;

})();
