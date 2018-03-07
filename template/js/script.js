(function($) {
	
	const LINK_ID = "download-link";
	
	// Check if Blobs are supported in the browser and output that info to the user.
	if(CheckIfSupported())
	{
		$("#stats-msg").html("هذا الموقع يدعم متصفحك مبروك عليك");
	}
	else
	{
		$("#stats-msg").html("أوه لا! هذا النمط من حفظ الملفات غير معتمد على المتصفح الخاص بك!");
	}
	
	/*
		Do something with the save-file-button depending on its state. Possible states are:
			"ready"      -> File is ready to begin preparation.
			"processing" -> File is currently being prepared for download.
			"finished"   -> File is ready to download.
	 */
	$("#save-file-btn").click(function(){
		var state = $(this).data("state");
		
		if(state === "ready")
		{
			ChangeLinkState("processing");
			
			var filename = $("#file-name").val();
			var contents = $("#file-contents").val();
			
			var startTime = new Date().getTime();
			
			var blob = new Blob([contents], {type: 'plain/text', endings: 'native'});
			var blobUrl = URL.createObjectURL(blob);
			
			var time = (new Date().getTime() - startTime) / 1000; // Seconds	
			var size = blob.size / 100; // KB
			
			UpdateStatistics(size.toFixed(3), time.toFixed(4));

			var link = document.createElement("a");
			link.href = blobUrl;
			link.innerHTML = "انقر هنا";
			link.download = filename + ".txt";
			link.id = LINK_ID;
			document.body.appendChild(link);
			
			ChangeLinkState("finished");
		}
		if(state === "finished")
		{
			var link = document.getElementById(LINK_ID);
			link.click();
			link.parentNode.removeChild(link);

			ChangeLinkState("ready");
		}
	});
	
	/*
		Check if Blobs are supported in this browser.
		@returns True if supported, false otherwise.
	 */
	function CheckIfSupported() {
		try {
			return !!new Blob;
		}
		catch(e) {
			return false;
		}
	}
	
	/*
		Change the state of the download link.
		@param state The ID of the current state.
	 */
	function ChangeLinkState(state) {
		var $button = $("#save-file-btn");
		$button.data("state", state);
		
		if(state === "processing")
			$button.html("معالجة...");
		else if (state === "ready")
			$button.html("إعداد التحميل الخاص بك");
		else if (state === "finished")
			$button.html("اضغط للتحميل");
	}
	
	/*
		Show the user the stats on their download.
		@param size Size of the file, in bytes.
		@param time Time it took to generate the file.
	 */
	function UpdateStatistics(size, time) {
		$("#stats-size").html(size);
		$("#stats-time").html(time);
	}
	
})(jQuery);
