class Window

  constructor: () ->
    History.Adapter.bind window,'statechange', ()=> 
      state = History.getState()
      console.log state
    
    # Push a new state to the window
    # History.pushState({state:2}, "State 2", "?state=2");
