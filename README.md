jQuery File Input Thumb
=======================

I loved this example @ HTML5 Rocks, so decided to make a basic jQuery plugin that wraps pretty much the exact same code
http://www.html5rocks.com/en/tutorials/file/dndfiles/ 

Usage
-----

   // Inserts the preview image before the file input
   $('#file-input').imagePreview();
   
   // Custom preview container
   $('#file-input').imagePreview({'selector':'#thumb-container'});