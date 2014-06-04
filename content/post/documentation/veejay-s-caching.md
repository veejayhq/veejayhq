---
title: veejay’s caching
name: veejay-s-caching
type: post
date: "Tue, 01 May 2007 22:03:12 +0000"
author: veejayhq
category: documentation
---
Veejay has a caching mechanism that loads (compressed) images from disk into RAM. Frames furthest away from the currently played position will be discarded first when the cache size limit is reached. By default, this limit is set to 30% of your system's memory. There are two commandline options you can use to change the behaviour of the cache:-m / --memory [percentage of available RAM to use]-j / --max_chain [maximum number of simultaneous samples to cache]If you mix a lot of (short) different samples over eachother, you might want to set "-j5 -m50" . If you would have 100 MB RAM, veejay will consume up to 50%, dividing the memory available for 5 different samples, thus max. 10 MB RAM per sample.