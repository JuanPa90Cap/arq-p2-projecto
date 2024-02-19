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
	if (destination === "julian/UCE") {
        

        let response = JSON.parse(message.payloadString);
        dataFormat = response;
        let dataID = dataFormat.id;
    if(dataID == 1){

        let dataCPU = dataFormat.CPU;
        let dataMemoria = dataFormat.Memoria;
        let dataDisco = dataFormat.Disco;
        let dataRecepcion = dataFormat.Recepcion;
        

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
            if(dataID == 2){

                let dataCPU2 = dataFormat.CPU;
                let dataMemoria2 = dataFormat.Memoria;
                let dataDisco2 = dataFormat.Disco;
                let dataRecepcion2 = dataFormat.Recepcion;
                
        
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
            if(dataID == 3){
                
            let dataCPU3 = dataFormat.CPU;
            let dataMemoria3 = dataFormat.Memoria;
            let dataDisco3 = dataFormat.Disco;
            let dataRecepcion3 = dataFormat.Recepcion;
            
    
            // Actualizar los valores en tiempo real en la página
            document.getElementById("cpuValue3").innerText = dataCPU3;
            document.getElementById("memoryValue3").innerText = dataMemoria3;
            document.getElementById("diskValue3").innerText = dataDisco3;
            document.getElementById("RecepcionValue3").innerText = dataRecepcion3;
    
        
            // Actualizar los valores anteriores con los nuevos valores
            prevCPUValue = dataCPU3;
            prevMemoryValue = dataMemoria3;
            prevDiskValue = dataDisco3;
            prevRecepcionValue = dataRecepcion3;
        } else{
                
            let dataCPU4 = dataFormat.CPU;
            let dataMemoria4 = dataFormat.Memoria;
            let dataDisco4 = dataFormat.Disco;
            let dataRecepcion4 = dataFormat.Recepcion;
            
    
            // Actualizar los valores en tiempo real en la página
            document.getElementById("cpuValue4").innerText = dataCPU4;
            document.getElementById("memoryValue4").innerText = dataMemoria4;
            document.getElementById("diskValue4").innerText = dataDisco4;
            document.getElementById("RecepcionValue4").innerText = dataRecepcion4;
    
        
            // Actualizar los valores anteriores con los nuevos valores
            prevCPUValue = dataCPU4;
            prevMemoryValue = dataMemoria4;
            prevDiskValue = dataDisco4;
            prevRecepcionValue = dataRecepcion4;
        }


    }
};

// Función para calcular el porcentaje de cambio
function calculatePercentage(diff, prevValue) {
    if (prevValue === 0) {
        return "0"; // Si el valor anterior es cero, el porcentaje de cambio es cero
    }

    let percentage = ((diff / prevValue) * 100).toFixed(2);
    if (isFinite(percentage)) {
        return percentage >= 0 ? "+" + percentage : percentage;
    } else {
        return "0";
    }
}

var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("julian/UCE", { qos: 1 });
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