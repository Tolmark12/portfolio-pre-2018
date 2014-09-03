Handlebars.registerHelper 'video', (vidName)->
  new Handlebars.SafeString """
      <video loop autoplay>
        <source src="assets/#{vidName}.webm" type='video/webm; codecs="vp8.0, vorbis"' />
        <source src="assets/#{vidName}.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
    """
Handlebars.registerHelper 'portfolioIndexProjects', ()->
  str = ""
  for project in DataVo.portfolio
    str += "<div class='project #{project.id}' onclick=\" PubSub.publish( 'CHANGE_CONTENT', { pageId:'#{project.id}' }) \" />"
  new Handlebars.SafeString str