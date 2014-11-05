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
    justin_bw_v2   : id:"justin_bw_v2",      title: "Justin Cash", subtitle:"CD Reissue" 
    logos          : id:"logos",             title: "Various Logos"
    logos          : id:"logos",             title: "Various Logos"
    design_process : id:"design_process",    title: "Design Process"
    pagoda_pricing : id:"pagoda_pricing",    title: "Pagoda Box", subtitle:"Pricing App"  
    form_studies   : id:"form_studies",      title: "Form Studies"
    odds_and_ends  : id:"odds_and_ends",     title: "Odds & Ends"
    delorum        : id:"delorum",           title: "Delorum Design"



  @portfolio : [
    @pages.mfa
    @pages.logos   
    @pages.justin_bw_v1
    @pages.justin_bw_v2
    @pages.design_process   
    @pages.resistance
    @pages.playmill
    @pages.pagoda_site    
    @pages.pagoda_pricing
    @pages.pagoda_dash
    @pages.ibex
    @pages.form_studies
    @pages.delorum
    @pages.odds_and_ends
  ]

  @createProjectRows : () ->
    DataVo.projectsGrid = []
    count               = 0
    ar                  = []
    totalColumns        = 5
    lastIndex           = @portfolio.length - 1
    for project, i in @portfolio 
      ar.push project

      # Add a new row is the columns in this one are full unldess this is the last item
      if ++count == totalColumns && i != lastIndex
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
      
      

