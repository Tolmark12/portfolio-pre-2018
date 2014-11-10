# Generating the video files
```
  MP4:
  ffmpeg -i input.mov output.mp4  # : https://trac.ffmpeg.org/wiki/Encode/H.264
  ffmpeg -i home.mov -crf 21 -maxrate 1500k home.mp4 
    
  WEBM:
  ffmpeg -i home.mov  -codec:v libvpx -quality best -cpu-used 0 -b:v 500k -qmin 10 -qmax 42 -maxrate 1000k -bufsize 2000k -threads 4  -codec:a libvorbis -b:a 128k  home.webm

  Image Sequence (Awesome!:
  http://en.wikibooks.org/wiki/FFMPEG_An_Intermediate_Guide/image_sequence
  ffmpeg -framerate 15/1 -pattern_type glob -i 'IMG_*.png' -c:v libx264 -r 12 -pix_fmt yuv420p out.mp4
  
  Pretty sweet use of video:
  https://www.fiftythree.com/paper

  Lazy loading images : http://luis-almeida.github.io/unveil/
```
