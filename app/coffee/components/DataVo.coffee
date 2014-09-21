class DataVo
  
  @emptyPage       : id:"empty", title:""
  @pages :
    "/"            : id:"index",             title: ""
    about          : id:"about",             title: ""
    contact        : id:"contact",           title: ""
    index          : id:"index",             title: ""
    resistance     : id:"resistance",        title: "Resistance Movement"
    ibex           : id:"ibex",              title: "Ibex"  
    playmill       : id:"playmill",          title: "Playmill"  
    mfa            : id:"mfa",               title: "MFA Thesis"  
    pagoda_site    : id:"pagoda_site",       title: "Pagoda Box", subtitle:"Front Site"  
    pagoda_dash    : id:"pagoda_dash",       title: "Pagoda Box", subtitle:"Dashboard"  
    justin_bw_v1   : id:"justin_bw_v1",      title: "Justin Cash", subtitle:"Inital Release" 
    logos          : id:"logos",             title: "Various Logos"
    logos          : id:"logos",             title: "Various Logos"
    design_process : id:"design_process",    title: "Design Process"



  @portfolio : [
    @pages.mfa
    @pages.justin_bw_v1
    @pages.playmill
    @pages.resistance
    @pages.logos   
    @pages.design_process   
    @pages.pagoda_site    
    @pages.pagoda_dash
  ]

  @createProjectRows : () ->
    DataVo.projectsGrid = []
    count               = 0
    ar                  = []
    totalColumns        = 4
    for project in @portfolio 
      ar.push project
      if ++count == totalColumns
        DataVo.projectsGrid.push ar
        count = 0
        ar = []

    # Add empty pages to the last row
    while count++ < totalColumns
      ar.push @emptyPage
    DataVo.projectsGrid.push ar
      
  
    
  @getIndexOfProject : (projectId)->
    for project, i in DataVo.portfolio
      if projectId == project.id
        return i
  
  @pageIsPortfolioProject : (projectId)-> 
    for project in @portfolio
      if project.id == projectId then return true
    return false
      
      

