class Portfolio

  constructor: ( @$el ) ->
    @build()

  build : () ->
    @nav = new TopNav(@$el)
    @nav = new ContentArea $(".content", @$el)
  
  
Portfolio = Portfolio