class ContentArea

  constructor: (@$el) ->
    @$html = $("html, body")
    @$el.css opacity:0
    PubSub.subscribe 'CHANGE_CONTENT', (msg, data)=> @changePage data.pageId
    PubSub.subscribe 'NEXT_PROJECT',   (msg, data)=> @nextProject()
    PubSub.subscribe 'PREV_PROJECT',   (msg, data)=> @prevProject()
  
  changePage : (page) ->
    if page == @currentPage then return
    if @currentPage?
      @unloadCurrentPage page
    else
      @loadPage page
  
  unloadCurrentPage : (newPage) ->
    @$el.velocity {opacity:0}, duration:200, complete:()=> @loadPage newPage

  loadPage : (page) ->
    @scrollToTop()
    @currentPage = page
    @$el.empty()
    node = templates[ "pages/"+page ]()
    $node = $(node)
    @$el.append( $node )
    @$el.velocity {opacity:1}, duration:400
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
    $(".play-vid").on 'click', (e)=>
      fadeout = 400
      fadeIn  = 400
      parent  = $(e.target).parent()
      node    = $( templates[ "video" ]({ vidName:$(e.target).attr "data-src" }) )
      parent.css height: parent.height()

      $(e.target).velocity {opacity:0}, duration:fadeout*1.3, complete:()=>
        parent.find('img').remove()
        $(e.target).remove()
        node.css opacity:0
        node.velocity {opacity:1}, {duration:fadeIn}
        parent.append node
        @addVidControls node
      parent.find('img').velocity {opacity:0}, {duration:fadeout}


  addVidControls : (vid) ->
    vid.on 'click', ()=>
      if vid[0].paused
        vid[0].play()
      else
        vid[0].pause()

    
  

      
  