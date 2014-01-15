var gallery = {
    // notification Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        $("#galleryPic").click(this.start);
        
    },    
    start:function(){

        // Retrieve image file location from specified source
        navigator.camera.getPicture(function(imageURI) {
            console.log("imageURI:"+imageURI);
            var image  = '<img style="margin:5px;width:60px;height:60px;float:left;"  src="'+imageURI+'" />';
            console.log("image:"+image);
            $("#galleryRoll").append(image);
        }, function(message) {
            alert('Gallery Failed because: ' + message);
        }, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        });
    }
    
};
