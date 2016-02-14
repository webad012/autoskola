var controller;
var app = {
    // Application Constructor
    initialize: function() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },

    onDeviceReady: function() {
        controller = new Controller();
//        app.overrideBrowserAlert();

        document.addEventListener("backbutton", function(e){
            e.preventDefault();
            navigator.notification.confirm(
                'Да ли сте сигурни да желите да изађете?',  // message
                function(buttonIndex){  // callback to invoke with index of button pressed
                    if(buttonIndex === 1)
                    {
                        navigator.app.exitApp();
                    }
                },
                'Излаз',                 // title
                ['Да','Не']            // buttonLabels
            );
        }, false);
    }

//    overrideBrowserAlert: function() {
//        if (navigator.notification) { // Override default HTML alert with native dialog
//            window.alert = function (message) {
//                navigator.notification.alert(
//                    message,    // message
//                    null,       // callback
//                    "Autoskola", // title
//                    'OK'        // buttonName
//                );
//            };
//        }
//    }
};

app.initialize();
