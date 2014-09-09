class OverlayNav

  constructor: () ->
    node = templates['overlay-nav']()
    @$node = $(node)
    @$window = $ window
    $('body').append( @$node )
    @$node.css opacity:0
    @hide()
    
    $('.right', @$node).on "click", ()=> PubSub.publish 'NEXT_PROJECT'
    $('.left',  @$node).on "click", ()=> PubSub.publish 'PREV_PROJECT'
    PubSub.subscribe 'CHANGE_CONTENT', (msg, data)=> @onChangePage data.pageId

  onScroll : () =>
    curPos = @$window.scrollTop()
    diff = @lastPosition - curPos
    if curPos < 0
      @lastPosition = 0
      return
      
    if diff > 20
      @show()
    else if diff < -1
      @hide()
    @lastPosition = curPos
      
  show : () -> 
    if @isHidden
      @$node.stop true
      @$node.css display:"block"
      @$node.animate {opacity:1}, {duration:500}
      @isHidden = false
  
  hide : () -> 
    if !@isHidden
      @$node.stop true
      @$node.animate {opacity:0}, {duration:300, complete:()=> @$node.css({display:"none"}) }
      @isHidden = true
  
  onChangePage : (pageId) ->
    if !DataVo.pageIsPortfolioProject( pageId)
      @hide()
      @stopScrollListening()
    else
      @activatePage pageId
      @listenForScroll()

  activatePage : (pageId) ->
    @activePage?.removeClass "active"
    @activePage = $(".#{pageId}",@$node)
    @activePage.addClass "active visited"
  
  stopScrollListening : () -> @$window.off "scroll", @onScroll
  listenForScroll     : () -> @$window.on "scroll", @onScroll
  
  
      