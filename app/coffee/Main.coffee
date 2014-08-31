class Portfolio

  constructor: ( @$el ) ->
    @build()

  build : () ->
    @nav = new TopNav(@$el)
  
  
Portfolio = Portfolio