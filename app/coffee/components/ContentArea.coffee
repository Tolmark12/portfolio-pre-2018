class ContentArea

  constructor: (@$el) ->
    @$el.css opacity:0
    PubSub.subscribe 'CHANGE_CONTENT', (msg, data)=> @changePage data.pageId
  
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
  
