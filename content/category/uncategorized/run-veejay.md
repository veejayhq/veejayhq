---
title: "Run Veejay "
name: run-veejay
type: post
date: "Tue, 05 Aug 2008 20:56:47 +0000"
author: jose
category: uncategorized
tags: []
---
### **For the first time:**  


open a terminal  
Copy a truetype font to $HOME/.veejay/fonts  


`  
$ mkdir -p ~/.veejay/fonts  
$ cp /usr/share/fonts/truetype/ttf-bitstream-vera/Vera.ttf ~/.veejay/fonts  
`  


### **Running veejay**  


**1. Play**  


open a terminal  


`$ veejay -d -n`  


To run veejay without accelerated display  


`$ veejay -O5 -d -n`  


To run veejay in verbose mode  


`$ veejay -O5 -d -n -v`  


To run veejay with openGL display  


`$ veejay -O4 -d -n`  


Start another terminal and type  


`$ reloaded`  


or  


`$ reloaded -n`  


**2. Stop**  


Open another terminal  


`$ sayVIMS "600:;"`  
(or press CTRL-C in the terminal running veejay)