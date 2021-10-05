let ws = new WebSocket ("wss://fep-app.herokuapp.com/");
let obj = {
    type: "message",
    payload: {
        username: "John",
        message: "Hello World"
    }
}

ws.onopen = function () {
	ws.send(JSON.stringify(obj));
	console.log("ws open");
}
ws.onmessage = (event) =>{
	let data = JSON.parse(event.data)
	console.log(data.payload.username +": "+ data.payload.message);
}
ws.onclose = () => console.log('ws closed');
