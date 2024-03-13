/*################################################################################################*/
/*####################################### CLIENTE MQTT ###########################################*/
/*################################################################################################*/

//var wsbroker = "0.tcp.sa.ngrok.io";
var wsbroker = "broker.hivemq.com";
//var wsbroker = "localhost";

//var wsport = 14792; // port for above
var wsport = 1883; // port for above
var client = new Paho.MQTT.Client(
	wsbroker,
	//Number(wsport),
	Number(8000),
	"myclientid_" + parseInt(Math.random() * 100, 10)
);

client.onConnectionLost = function (responseObject) {
	console.log("connection lost: " + responseObject.errorMessage);
};

/*################################################################################################*/
/*####################################### LLEGA EL MENSAJE########################################*/
/*################################################################################################*/
let prevCPUValue = 0;
let prevMemoryValue = 0;
let prevDiskValue = 0;
let prevRecepcionValue = 0;

client.onMessageArrived = function (message) {
	let destination = message.destinationName;
	if (destination === "grupo6") {
        let response = JSON.parse(message.payloadString);
        dataFormat = response;
        let pc = dataFormat.id;

    if(pc == 1){  
        let dataCPU = dataFormat.cpu;
        let dataMemoria = dataFormat.memory;
        let dataDisco = dataFormat.disk;
        let dataRecepcion = dataFormat.net;
        
        // Actualizar los valores en tiempo real en la página
        document.getElementById("cpuValue").innerText = dataCPU;
        document.getElementById("memoryValue").innerText = dataMemoria;
        document.getElementById("diskValue").innerText = dataDisco;
        document.getElementById("RecepcionValue").innerText = dataRecepcion;
        // Actualizar los valores anteriores con los nuevos valores
        prevCPUValue = dataCPU;
        prevMemoryValue = dataMemoria;
        prevDiskValue = dataDisco;
        prevRecepcionValue = dataRecepcion;

    
        }

    if(pc ==2){  
        let dataCPU2 = dataFormat.cpu;
        let dataMemoria2 = dataFormat.memory;
        let dataDisco2 = dataFormat.disk;
        let dataRecepcion2 = dataFormat.net;
        
        // Actualizar los valores en tiempo real en la página
        document.getElementById("cpuValue2").innerText = dataCPU2;
        document.getElementById("memoryValue2").innerText = dataMemoria2;
        document.getElementById("diskValue2").innerText = dataDisco2;
        document.getElementById("RecepcionValue2").innerText = dataRecepcion2;
        // Actualizar los valores anteriores con los nuevos valores
        prevCPUValue = dataCPU2;
        prevMemoryValue = dataMemoria2;
        prevDiskValue = dataDisco2;
        prevRecepcionValue = dataRecepcion2;
        }
    }
};

var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("grupo6", { qos: 1 });
	},
	onFailure: function (message) {
		console.log("Connection failed: " + message.errorMessage);
	},
};


function testMqtt(){
	console.log("hi");
}
function initMqtt() {
	client.connect(options);
}