---
title: Veejay and images.
name: veejay-and-images
type: post
date: "Fri, 15 Jun 2007 10:16:26 +0000"
author: niels
category: documentation
---
**Instead of videofiles, veejay can use images as source**  

Working:  


*     

*   jpeg
*     

*   png
*     

*   bmp
*     

gdk-pixbuf supports at least  


*     

*   jpeg
*     

*   png
*     

Possibly also:  


*     

*   wbmp
*     

*   wmf
*     

*   ani
*     

*   bmp
*     

*   gif
*     

*   ico
*     

*   pcx
*     

*   pnm
*     

*   ras
*     

*   tga
*     

*   xmb
*     

*   xpm
*     

*   tiff
*     

*   svg
*     


**Outputting images:  
**  
Making screenshots (scales and save image to file)  

330:<output width> <output height> <filename>;  

for example  


    $ sayVIMS "330:640 480 screenshot.png;"