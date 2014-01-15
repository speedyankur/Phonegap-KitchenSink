var audio = {
    // notification Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        $("#record").click(this.start);
        
    },    
    start:function(){

        navigator.device.capture.captureAudio(function(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                var path = mediaFiles[i].fullPath;
                console.log(path);
                $('#audioPlayer').css('display',"block");
                $('#audioPlayer').html('<source src="'+path+'">');

            }
        }
        , function(error) {
            var msg = 'An error occurred during recording: ' + error.code;
            alert(msg);
        }, {
            duration: 5
        });
    }
    
};
