// basic functionalities


$(document).ready(function () {
    var topicSubscribed = [];
    var client;
    var address = $("#address").val();
    client = mqtt.connect(address);

   



    //connect
    $("#btn-connect").click(function () {
        connected = true;
        client.on("connect", function () {
            console.log("successfully connected!")
        })
        $("#status").val("connected")
        client.on("message", function (topic, payload) {
        console.log([topic, payload].join(": "));
            $('#tbodyB').append('<tr><td>' + topic + '<td>' + payload + '<td>'+moment().format('MMMM Do YYYY, h:mm:ss a') + '</td></tr>');

        })


  

    //publish
    $("#btnPublish").click(function () {
        var topic = $("input[name=topic]").val();
        var payload = $("input[name=payload]").val();
        client.publish(topic, payload)
        $('#tbody1').append('<tr><td>' + topic + '<td>' + payload + '<td>'+moment().format('MMMM Do YYYY, h:mm:ss a') + '</td></tr>');

    })





    //Subscribe
    $("#btnSubscribe").click(function () {
        var topicSubscribe = $("input[name=topicSubscribe]").val();            
        console.log(topicSubscribe);
        topicSubscribed.push(topicSubscribe);
        $('#tbody2').append('<tr><td>' + topicSubscribe + '<td>'+moment().format('MMMM Do YYYY, h:mm:ss a') + '</td></tr>');
        client.subscribe(topicSubscribe); 
    
       
    });

        //unsubscribe
     $("#btn-Unsubscribe").click(function () {
       var topicSubscribe = $("input[name=topicSubscribe]").val();
       topicSubscribed.splice(topicSubscribed.indexOf(topicSubscribe),topicSubscribed.indexOf(topicSubscribe)+1);
       client.unsubscribe(topicSubscribe);
       
    });


});

        //Disconnected
    $("#btn-disconnect").click(function () {
        client.end();
        document.getElementById("btnSubscribe").disabled = true;
        $("#status").val("disconnected");
  
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