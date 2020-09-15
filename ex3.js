var net = require('net');
var client = new net.Socket();


client.connect(9999, '192.168.0.106', function() {
    console.log("connected to the logger");
});


client.on('data', function(data) {
    try{
        acc = JSON.parse(data.toString());
        if(acc.accelerometer.value[2]>0){ //this is the y axes value
            console.log("moving upwards");
        } else {
            console.log("moving downwards");
        }
       
    } catch(err) {
        console.log(err.message);
    }
});


client.on('close', function() {
    console.log('Connection closed');
});