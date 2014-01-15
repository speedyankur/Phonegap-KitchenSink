var camera = {
    // notification Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        $("#cameraPic").click(this.start);
        
    },    
    start:function(){

        // Retrieve image file location from specified source
        navigator.camera.getPicture(function(imageData) {
            var image  = '<img style="margin:5px;width:60px;height:60px;float:left;"  src="data:image/jpeg;base64,'+imageData+'" />';
            $("#cameraRoll").append(image);
        }, function(message) {
            alert('Camera Failed because: ' + message);
        }, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.DATA_URL
        });
    }
    
};
