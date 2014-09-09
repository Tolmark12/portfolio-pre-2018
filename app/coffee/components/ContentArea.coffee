class ContentArea

  constructor: (@$el) ->
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
    @$el.animate {opacity:0}, duration:200, complete:()=> @loadPage newPage

  loadPage : (page) ->
    @currentPage = page
    @$el.empty()
    node = templates[ page ]()
    $node = $(node)
    @$el.append( $node )
    @$el.animate {opacity:1}, duration:400
    $("html, body").scrollTop 0

  
  nextProject : () -> 
    newProjectIndex = DataVo.getIndexOfProject(@currentPage) + 1
    if newProjectIndex < DataVo.portfolio.length
      PubSub.publish( 'CHANGE_PAGE', { pageId:DataVo.portfolio[newProjectIndex].id } )

  prevProject : () -> 
    newProjectIndex = DataVo.getIndexOfProject(@currentPage) - 1
    if newProjectIndex > -1
      PubSub.publish( 'CHANGE_PAGE', { pageId:DataVo.portfolio[newProjectIndex].id } )
  
