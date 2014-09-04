class Portfolio

  constructor: ( @$el ) ->
    @build()

  build : () ->
    @nav     = new TopNav(@$el)
    @content = new ContentArea $(".content", @$el)
    @window  = new Window()
  
  
Portfolio = Portfolio