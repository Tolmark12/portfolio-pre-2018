class TopNav

  constructor: ( $el ) ->
    node = hTemplates['top-nav']()
    $node = $(node)
    $el.append( $node )
    
    # Pub/Sub for nav item clicks
    PubSub.subscribe 'NAV_CLICK', @onNavItemClick
    $("a", $node).on "click", (e)=> 
      $el = $(e.target)
      PubSub.publish 'NAV_CLICK', id:$el.attr('data'), el:$el

  # On Nav Item Click

  onNavItemClick : (m, data) ->
    console.log data.id
    console.log data.el
  