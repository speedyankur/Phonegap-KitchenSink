var compass = {
    watchID:null,
    // notification Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        $("#compassStart").click(this.start);
        $("#compassStop").click(this.stop);
    },    
    start:function(){
        // Update acceleration every 3 seconds
        var options = {
            frequency: 100
        };

        watchID = navigator.compass.watchHeading(function(heading) {
            var element = document.getElementById('compassReading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }, function(e){
            alert("Compass not avaialble");
            navigator.compass.clearWatch(watchID);
        }, options);
    },
    stop:function(){
        if (watchID) {
            navigator.compass.clearWatch(watchID);
            watchID = null;
        }
    }
    
};
