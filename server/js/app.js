var Portfolio;

Portfolio = (function() {
  function Portfolio($el) {
    this.$el = $el;
    this.build();
  }

  Portfolio.prototype.build = function() {
    this.nav = new TopNav(this.$el);
    return this.nav = new ContentArea($(".content", this.$el));
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
    this.loadPage('portfolio');
    PubSub.subscribe('CHANGE_CONTENT', (function(_this) {
      return function(msg, data) {
        return _this.changePage(data.pageId);
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
    return this.$el.animate({
      opacity: 1
    }, {
      duration: 400
    });
  };

  return ContentArea;

})();

var DataVo;

DataVo = (function() {
  function DataVo() {}

  DataVo.pages = {
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
      title: "IBEX"
    }
  };

  DataVo.portfolio = [DataVo.pages.resistance, DataVo.pages.resistance, DataVo.pages.resistance, DataVo.pages.resistance, DataVo.pages.resistance, DataVo.pages.resistance, DataVo.pages.ibex];

  return DataVo;

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
        return _this.changePageTitle(DataVo.pages[data.pageId].title);
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
    return PubSub.publish('CHANGE_CONTENT', {
      pageId: data.id
    });
  };

  TopNav.prototype.changePageTitle = function(title) {
    return $('.title-block', this.$node).animate({
      opacity: 0
    }, {
      duration: 200,
      complete: (function(_this) {
        return function() {
          $('.title-block', _this.$node).text(title);
          return $('.title-block', _this.$node).animate({
            opacity: 1
          }, {
            duration: 200
          });
        };
      })(this)
    });
  };

  return TopNav;

})();
