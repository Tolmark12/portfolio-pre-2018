var Portfolio;

Portfolio = (function() {
  function Portfolio($el) {
    this.$el = $el;
    this.build();
  }

  Portfolio.prototype.build = function() {
    return this.nav = new TopNav(this.$el);
  };

  return Portfolio;

})();

Portfolio = Portfolio;

var TopNav;

TopNav = (function() {
  function TopNav($el) {
    var $node, node;
    node = hTemplates['top-nav']();
    $node = $(node);
    $el.append($node);
    PubSub.subscribe('NAV_CLICK', this.onNavItemClick);
    $("a", $node).on("click", (function(_this) {
      return function(e) {
        $el = $(e.target);
        return PubSub.publish('NAV_CLICK', {
          id: $el.attr('data'),
          el: $el
        });
      };
    })(this));
  }

  TopNav.prototype.onNavItemClick = function(m, data) {
    console.log(data.id);
    return console.log(data.el);
  };

  return TopNav;

})();
