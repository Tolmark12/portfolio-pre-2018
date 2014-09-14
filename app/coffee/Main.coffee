class Portfolio

  constructor: ( @$el ) ->
    @build()

  build : () ->
    DataVo.createProjectRows()
    @nav        = new TopNav @$el
    @content    = new ContentArea $(".content", @$el)
    @window     = new Window()
    @overlayNav = new OverlayNav @$el
  
  
Portfolio = Portfolio