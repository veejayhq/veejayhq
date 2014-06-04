---
title: "Veejay’s sound output: jackd"
name: veejay-s-sound-output-jackd
type: post
date: "Sun, 29 Apr 2007 22:08:53 +0000"
author: veejayhq
category: documentation
---
Veejay plays audio through **Jack**You must start the jack server prior to starting Veejay:$ jackd$ veejay video-file.aviIf the audio samplerate differs (Jack plays 48Khz, veejay plays 44.1Khz),you need to setup jack in the proper samplerate.$ jackd -r 44100