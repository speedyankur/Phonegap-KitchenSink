var geolocation = {
    // notification Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        $("#getLocation").click(this.start);
        
    },    
    start:function(){

        navigator.geolocation.getCurrentPosition(function(position) {
            var element = document.getElementById('map');
            element.src = "http://maps.googleapis.com/maps/api/staticmap?center="+position.coords.latitude+","+position.coords.longitude+"&zoom=16&size=400x400&sensor=false&markers=color:red%7C"+position.coords.latitude+","+position.coords.longitude;
            element.style.display = 'block';
        }, function(message) {
            alert('location Failed because: ' + message);
        });
        
    }
    
};
