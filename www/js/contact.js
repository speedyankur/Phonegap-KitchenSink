var contacts = {
    // notification Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        $("#search").click(this.start);
        
    },    
    start:function(){
        var name = $('#nameField').val();
        console.log("filter:"+name);
        var options = new ContactFindOptions();
        options.filter = name;
        var fields = ["displayName", "name"];
        navigator.contacts.find(fields,
            function(contacts) {

                console.log(contacts.length);
                $('#searchList').html("");

                for (var i = 0; i < contacts.length; i++) {
                    $('#searchList').append("<li>Display Name = " + JSON.stringify(contacts[i])+"</li>");
                }
            },
            function(error) {
                var msg = 'An error occurred during searching: ' + error.code;
                alert(msg);
            },
            options);
    }
    
};
