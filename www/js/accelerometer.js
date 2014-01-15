var accelerometer = {
    watchID:null,
    // notification Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        $("#accelerometerStart").click(this.start);
        $("#accelerometerStop").click(this.stop);
    },    
    start:function(){
        // Update acceleration every 3 seconds
        var options = {
            frequency: 100
        };

        watchID = navigator.accelerometer.watchAcceleration(function(acceleration) {
            var element = document.getElementById('accelerometerReading');
            element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
            'Acceleration Y: ' + acceleration.y         + '<br />' +
            'Acceleration Z: ' + acceleration.z         + '<br />' +
            'Timestamp: '      + acceleration.timestamp + '<br />';
        }, function(e){
            alert("Accelerator not avaialble")
        }, options);
    },
    stop:function(){
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }
    
};
