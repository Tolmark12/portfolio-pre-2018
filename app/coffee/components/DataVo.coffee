class DataVo

  @emptyPage       : id:"empty", title:""
  @pages :
    "/"            : id:"index",             title: ""
    boneyard       : id:"boneyard",          title: "Boneyard"
    about          : id:"about",             title: ""
    contact        : id:"contact",           title: ""
    delorum        : id:"delorum",           title: "Delorum Design"
    design_process : id:"design_process",    title: "Design Process"
    form_studies   : id:"form_studies",      title: "Experiments in Form"
    ibex           : id:"ibex",              title: "Ibex"
    index          : id:"index",             title: ""
    justin_bw_v1   : id:"justin_bw_v1",      title: "Justin Cash", subtitle:"Inital Release"
    justin_bw_v2   : id:"justin_bw_v2",      title: "Justin Cash", subtitle:"CD Reissue"
    logos          : id:"logos",             title: "Logos & Brands"
    mfa            : id:"mfa",               title: "MFA Thesis"
    nanobox        : id:"nanobox",           title: "Nanobox"
    odds_and_ends  : id:"odds_and_ends",     title: "Odds & Ends"
    pagoda_dash    : id:"pagoda_dash",       title: "Pagoda Box", subtitle:"Dashboard"
    pagoda_pricing : id:"pagoda_pricing",    title: "Pagoda Box", subtitle:"Pricing App"
    pagoda_site    : id:"pagoda_site",       title: "Pagoda Box", subtitle:"Front Site"
    playmill       : id:"playmill",          title: "Playmill"
    resistance     : id:"resistance",        title: "Resistance Movement"
    # Student
    student_hc     : id:"student_hc",        title: "HC Design", subtitle:"7 x 7 x 7 Cube"
    student_design_drawing_1     : id:"student_design_drawing_1",        title: "Design Drawing"



  @portfolio : [
    # @pages.nanobox
    @pages.pagoda_site
    @pages.pagoda_dash
    @pages.mfa
    # @pages.justin_bw_v1
    @pages.justin_bw_v2
    @pages.design_process
    @pages.playmill
    @pages.resistance
    @pages.logos
    # @pages.pagoda_pricing
    @pages.ibex
    @pages.form_studies
    @pages.delorum
    @pages.odds_and_ends
    # @pages.boneyard
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
