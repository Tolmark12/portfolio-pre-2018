class DataVo

  @pages :
    "/"            : id:"portfolio",     title: ""
    about          : id:"about",         title: ""
    contact        : id:"contact",       title: ""
    portfolio      : id:"portfolio",     title: ""
    resistance     : id:"resistance",    title: "Resistance Movement"
    ibex           : id:"ibex",          title: "Ibex"  
    playmill       : id:"playmill",      title: "Playmill"  
    mfa            : id:"mfa",           title: "MFA Thesis"  
    pagoda_site    : id:"pagoda_site",   title: "Pagoda Box", subtitle:"Front Site"  
    pagoda_dash    : id:"pagoda_dash",   title: "Pagoda Box", subtitle:"Dashboard"  
    justin_bw_v1   : id:"justin_bw_v1",  title: "Justin Cash", subtitle:"BW - First Release"  

  @portfolio : [
    @pages.resistance
    @pages.playmill
    @pages.mfa
    @pages.justin_bw_v1
    @pages.pagoda_dash
    @pages.pagoda_site
  ]
    
  @getIndexOfProject : (projectId)->
    for project, i in DataVo.portfolio
      if projectId == project.id
        return i
  
  @pageIsPortfolioProject : (projectId)-> 
    for project in @portfolio
      if project.id == projectId then return true
    return false
      
      

