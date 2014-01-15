var notification = {
    // notification Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        $("#normalAlert").click(this.normalAlert);
        $("#phonegapAlert").click(this.phonegapAlert);
        $("#phonegapConfirm").click(this.phonegapConfirm);
        $("#phonegapVibrate").click(this.vibrate);
        $("#phonegapBeep").click(this.beep);

    },
    normalAlert:function(){
        alert("yahoo");
    },
    phonegapAlert:function(){
        navigator.notification.alert(
            'You are the winner!',  // message
            this.alertCallback,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
            );
    },
    phonegapConfirm:function(){
        navigator.notification.confirm(
            'You are the winner!', // message
             this.confirmCallback, // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']     // buttonLabels
        );
    },
    vibrate:function(){
        navigator.notification.vibrate(100)
    },
    beep:function(){
        navigator.notification.beep(3);
    },
    alertCallback:function(){
        console.log("this is callback");
    },
    confirmCallback:function(buttonIndex){
        alert('You selected button ' + buttonIndex);
    }
};
