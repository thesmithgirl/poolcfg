#!/bin/bash

cat \
   00_header.html \
   01_welcome.html \
   02_pooltype.html \
   Magiline/M00_header.html \
   Magiline/M01_poolsize.html \
   Magiline/M99_footer.html \
   99_footer.html \
   > index.html
