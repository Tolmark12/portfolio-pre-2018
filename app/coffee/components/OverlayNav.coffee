class OverlayNav

  constructor: () ->
    node = templates['overlay-nav']()
    @$node = $(node)
    @$window = $ window
    $('body').append( @$node )
    @$node.css opacity:0
    @$map = $(".map", @$node)
    
    $('.right', @$node).on "click",             ()=> PubSub.publish 'NEXT_PROJECT'
    $('.left',  @$node).on "click",             ()=> PubSub.publish 'PREV_PROJECT'
    $('.left, .right',  @$node).on "mouseover", ()=> @showCenter()
    $('.left, .right',  @$node).on "mouseout",  ()=> @hideCenter()

    PubSub.subscribe 'CHANGE_CONTENT', (msg, data)=> @onChangePage data.pageId
    @hide()
    @hideCenter(0)


  onScroll : () =>
    curPos = @$window.scrollTop()
    diff = @lastPosition - curPos
    if curPos < 0
      @lastPosition = 0
      return
      
    if diff > 10
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
      @$node.animate {opacity:0}, {duration:300 }
      @isHidden = true

  showCenter : ()          -> 
    @$map.stop true
    @$map.css display:"block"
    @$map.animate {opacity:1}, {duration:200}
  hideCenter : (speed=200) -> 
    @$map.stop true
    @$map.animate {opacity:0}, {duration:speed, complete:()=> @$map.css({display:"none"})}
  
  onChangePage : (pageId) ->
    if !DataVo.pageIsPortfolioProject( pageId)
      @hide()
      @stopScrollListening()
      @stopKeyPressListening()
    else
      @activatePage pageId
      @listenForScroll()
      @listenForKeyPress()

  activatePage : (pageId) ->
    @activePage?.removeClass "active"
    @activePage = $(".#{pageId}",@$node)
    @activePage.addClass "active visited"
  
  listenForScroll         : () -> @$window.on "scroll", @onScroll
  stopScrollListening     : () -> @$window.off "scroll", @onScroll

  listenForKeyPress       : () -> $(document).on "keydown", @onKeyPress
  stopKeyPressListening   : () -> $(document).off "keydown", @onKeyPress
  
  
  onKeyPress : (e) =>
    switch e.which
      when 37 then PubSub.publish 'PREV_PROJECT'
      when 39 then PubSub.publish 'NEXT_PROJECT'
  
  
      