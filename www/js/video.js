var video = {
    // notification Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        $("#shoot").click(this.start);
        
    },    
    start:function(){

        navigator.device.capture.captureVideo(function(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                var path = mediaFiles[i].fullPath;
                console.log(path);
                $('#videoPlayer').css('display',"block");
                $('#videoPlayer').html('<source src="'+path+'">');

            }
        }
        , function(error) {
            var msg = 'An error occurred during shooting: ' + error.code;
            alert(msg);
        }, {
            duration: 5
        });
    }
    
};
