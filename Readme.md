# Generating the video files
```
  ffmpeg -i input.mov output.mp4  # : https://trac.ffmpeg.org/wiki/Encode/H.264
  ffmpeg -i input.mov output.webm # : https://trac.ffmpeg.org/wiki/Encode/VP8

  Image Sequence (Awesome!:
  http://en.wikibooks.org/wiki/FFMPEG_An_Intermediate_Guide/image_sequence
  ffmpeg -framerate 15/1 -pattern_type glob -i 'IMG_*.png' -c:v libx264 -r 12 -pix_fmt yuv420p out.mp4
  
  Pretty sweet use of video:
  https://www.fiftythree.com/paper

  Lazy loading images : http://luis-almeida.github.io/unveil/
```
