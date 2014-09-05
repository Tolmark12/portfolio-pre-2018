class Window

  constructor: () ->
    @defaultPage = 'resistance'
    # Subscribe to change page click events from
    PubSub.subscribe 'CHANGE_PAGE', (msg, data)=> @changePage data
    History.Adapter.bind window,'statechange', @onWindowStateChange
    @loadInitialPage()


  # Push a new state to the window
  changePage : (data) ->
    obj = DataVo.pages[data.pageId]
    History.pushState {page:obj.id}, obj.title, "?page=#{obj.id}"
    
          
  onWindowStateChange : () =>
    state = History.getState()
    PubSub.publish( 'CHANGE_CONTENT', { pageId:state.data.page })

  loadInitialPage : () ->
    pageId = document.URL.split("?")[1]?.split("=")[1]
    obj = if !pageId? then DataVo.pages[@defaultPage] else DataVo.pages[pageId]
    History.replaceState {page:obj.id}, obj.title, "?page=#{obj.id}"
    if true
      @onWindowStateChange()
  