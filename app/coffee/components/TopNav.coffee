class TopNav

  constructor: ( $el ) ->
    node = templates['top-nav']()
    @$node = $(node)
    $el.prepend( @$node )

    PubSub.subscribe 'CHANGE_CONTENT', (msg, data)=> @changePageTitleTxt DataVo.pages[data.pageId].title
    PubSub.subscribe 'NAV_CLICK', @onNavItemClick
    
    # Pub/Sub for nav item clicks
    $(".clickable", @$node ).on "click", (e)=> 
      $el = $(e.currentTarget)
      PubSub.publish 'NAV_CLICK', id:$el.attr('data'), el:$el

  # On Nav Item Click
  onNavItemClick : (m, data) ->
    PubSub.publish( 'CHANGE_PAGE', { pageId:data.id })

  changePageTitleTxt : (title) ->
    $('.title-block', @$node).animate {opacity:0}, duration:200, complete:()=>
      $('.title-block', @$node).text title
      $('.title-block', @$node).animate {opacity:1}, {duration:200}
  
  