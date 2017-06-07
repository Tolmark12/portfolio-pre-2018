class ContentArea

  constructor: (@$el) ->
    @$html = $ "html, body"
    @$body = $ "body"
    @$el.css opacity:0
    PubSub.subscribe 'CHANGE_CONTENT', (msg, data)=> @changePage data.pageId
    PubSub.subscribe 'NEXT_PROJECT',   (msg, data)=> @nextProject()
    PubSub.subscribe 'PREV_PROJECT',   (msg, data)=> @prevProject()

  changePage : (page) ->
    if page == @currentPage || !page? then return
    if @currentPage?
      @unloadCurrentPage page
    else
      @loadPage page

  unloadCurrentPage : (newPage) ->
    @$el.velocity {opacity:0}, duration:200, complete:()=> @loadPage newPage

  loadPage : (page) ->
    @fireGoogleAnalyticsEvent page
    @scrollToTop()
    @currentPage = page
    @$el.empty()
    $node = $( templates[ "pages/"+page ]() )
    @$el.append( $node )
    @$el.velocity {opacity:1}, duration:400
    @$body.attr "class", page
    @replaceVideoTags($node)

  scrollToTop : () ->
    window.scrollTo(0,0)

  nextProject : () ->
    newProjectIndex = DataVo.getIndexOfProject(@currentPage) + 1
    if newProjectIndex < DataVo.portfolio.length
      PubSub.publish( 'CHANGE_PAGE', { pageId:DataVo.portfolio[newProjectIndex].id } )

  prevProject : () ->
    newProjectIndex = DataVo.getIndexOfProject(@currentPage) - 1
    if newProjectIndex > -1
      PubSub.publish( 'CHANGE_PAGE', { pageId:DataVo.portfolio[newProjectIndex].id } )


  replaceVideoTags : ($node) ->
    @isFobiddenSafari()
    # @startVideo($node)
    setTimeout ()=>
      @startVideo()
    ,
      900


  startVideo : ($node) ->
    $vidTrigger = $(".play-vid")
    # $(".play-vid").on 'click', (e)=>
    vidName = $vidTrigger.attr "data-src"
    fadeout = 400
    fadeIn  = 400
    parent  = $vidTrigger.parent()
    node    = $( templates[ "video" ]({ vidName:vidName }) )
    parent.css height: parent.height()
    @fireGoogleAnalyticsVideoWatch vidName

    $vidTrigger.velocity {opacity:0}, duration:fadeout*1.3, complete:()=>
      parent.find('img').remove()
      $vidTrigger.remove()
      node.css opacity:0
      node.velocity {opacity:1}, {duration:fadeIn}
      parent.append node
      # @addVidControls node
    parent.find('img').velocity {opacity:0}, {duration:fadeout}


  addVidControls : (vid) ->
    vid[0].play()
    vid.on 'click', ()=>
      if vid[0].paused
        vid[0].play()
      else
        vid[0].pause()


  fireGoogleAnalyticsEvent : (pageId) ->
    ga 'send', 'pageview',
      'page'  : "/#{DataVo.pages[pageId].id}"
      'title' : DataVo.pages[pageId].title

  fireGoogleAnalyticsVideoWatch : (vidName) ->
    ga 'send', 'event', 'video', 'watch', vidName, 1


  isFobiddenSafari : () ->
    if ( navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 )
      $(".hide-for-safari").css display:'none'
