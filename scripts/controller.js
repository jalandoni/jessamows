var btnConnect = document.getElementById('btn_connect');
var btnPublish = document.getElementById('btn_publish');
var inputTopic ="mqtt/"+ document.getElementById('topic').value;
var inputPayload = document.getElementById('payload').value;
var btnSubs = document.getElementById('btn_subscribe');
var msg = document.getElementById("Message");





// basic functionalities
btnConnect.addEventListener('click', function (e) {
  e.preventDefault();
  client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
  client.on("connect", function () {
    document.getElementById('stat').value = "Connected Succesfully"

  });
});




  btnPublish.addEventListener('click', function (e) {
  e.preventDefault();
  console.log("message");
  client.on("message", function (topic, payload) {
    console.log([topic, payload].join(": "));
    // client.end();
  })
  
  client.publish("mqtt/demo", "hello world!")
   
  });
  



btnSubs.addEventListener('click', function (e) {
  e.preventDefault();
  client.subscribe("mqtt/demo");
  document.getElementById("msg").value = inputPayload;
  


});















// import paho.mqtt.client as mqtt


// def on_connect(client, userdata, flags, rc):
//   print("Connected with result code "+str(rc))


// #def on_message(client, userdata, msg):
// #   print(msg.topic+" "+str(msg.payload))

// client = mqtt.Client()
// client.on_connect = on_connect
// #client.on_message = on_message

// client.connect("iot.eclipse.org", 1883, 60)
// #client.connect("broker.hivemq.com", 1883, 60)
// while True:
//   message = input("").split(":")
//   if(len(message)==1):	#for all
//     client.publish("  cay",message[0])
//   if (len(message)==2): #for specefic receiver
//     message[0]="cay"
//     client.publish("r/"+message[0], message[1])


// client.loop_forever()




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
