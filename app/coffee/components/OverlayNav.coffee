class OverlayNav

  constructor: () ->
    node = templates['overlay-nav']()
    @$node = $(node)
    # $('body').append( @$node )
    # $('.right', @$node).on "click", ()=> console.log 'right'
    # $('.left',  @$node).on "click", ()=> console.log 'left'
