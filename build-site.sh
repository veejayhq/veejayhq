#!/bin/sh

TARGET_DIR=veejayhq.github.io
rm -rf ${TARGET_DIR}
git clone git@github.com:veejayhq/veejayhq.github.io.git ${TARGET_DIR}
./cmd.js build content ${TARGET_DIR}
cd ${TARGET_DIR}
echo "veejayhq.net" > CNAME
git add -u
git commit -m "Regenerated website on $(date)"
git push
