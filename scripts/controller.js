// basic functionalities


$(document).ready(function () {
    var subscribe = true;
    

    var address = $("#address").val();
    client = mqtt.connect(address);

    client.on("message", function (topic, payload) {
        console.log([topic, payload].join(": "))
    
    });



    //connect
    $("#btn-connect").click(function () {
        connected = true;
        client.on("connect", function () {
            console.log("successfully connected!")
        })
        $("#status").val("connected")

  

    //publish
    $("#btnPublish").click(function () {
        var topic = $("input[name=topic]").val();
        var payload = $("input[name=payload]").val();
        client.publish(topic, payload)
        $('#tbody1').append('<tr><td>' + topic + '<td>' + payload + '<td>'+moment().format('MMMM Do YYYY, h:mm:ss a') + '</td></tr>');

    })


    //unsubscribe
    $("#btnUnsubscribe").click(function () {
        var topicSubscribe = $("input[name=topicSubscribe]").val(); 
        client.unsubscribe(topicSubscribe);
    });


    //Disconnected
    $("#btn-disconnect").click(function () {
      
        client.end();
        $("#status").val("disconnected");
  
    });


    //Subscribe
    $("#btnSubscribe").click(function () {
        var topic = $("input[name=topic]").val();
        var payload = $("input[name=payload]").val();
        var topicSubscribe = $("input[name=topicSubscribe]").val();         
        client.subscribe(topic);
        console.log(topicSubscribe);
        $('#tbody2').append('<tr><td>' + topicSubscribe + '<td>'+moment().format('MMMM Do YYYY, h:mm:ss a') + '</td></tr>');
        if (topic ==topicSubscribe){
            
       $("#btnPublish").click(function () {
            $('#tbodyB').append('<tr><td>' + topic + '<td>' + payload + '<td>'+moment().format('MMMM Do YYYY, h:mm:ss a') + '</td></tr>');
        });
    }

    });


});

})






// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })