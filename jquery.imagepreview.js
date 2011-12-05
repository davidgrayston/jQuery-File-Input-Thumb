(function($){
	$.fn.imagePreview = function(params){
		$(this).change(function(evt){
			
			if(typeof FileReader == "undefined") return true; // File reader not available.
				
			var fileInput = $(this);
			var files = evt.target.files; // FileList object
			
			// Loop through the FileList and render image files as thumbnails.
			for (var i = 0, f; f = files[i]; i++) {
			
				// Only process image files.
				if (!f.type.match('image.*')) {
					continue;
				}
				
				var reader = new FileReader();
				
				// Closure to capture the file information.
				reader.onload = (function(theFile) {
					return function(e) {
						// Render thumbnail.
						var imgHTML = '<img class="file-input-thumb" src="' + e.target.result + '" title="' + theFile.name + '"/>';

						if( typeof params.selector != 'undefined' ){
							$(params.selector).html(imgHTML);
						}else{
							fileInput.before(imgHTML);
						}
					};
				})(f);
				
				// Read in the image file as a data URL.
				reader.readAsDataURL(f);
			}
		});
	};
})(jQuery);