function sendMessageToChat() {
	let ws = new WebSocket ("wss://fep-app.herokuapp.com/");
	let msg = document.getElementById("sendMessage").value;
	let obj = {
	    type: "message",
	    payload: {
	        username: "John",
	        message: msg
	    }
	}

	ws.onopen = function () {
		ws.send(JSON.stringify(obj));
		console.log("ws open");
	}
	ws.onmessage = (event) =>{
		let data = JSON.parse(event.data)
		let newDiv = document.createElement("p");
        newDiv.innerHTML = data.payload.username +": "+ data.payload.message;
        document.getElementById("messageBlocks").appendChild(newDiv);
		// console.log(data.payload.username +": "+ data.payload.message);
	}
	ws.onclose = () => console.log('ws closed');
}

function checkId () {
	let loginName = document.getElementById("loginInput");

	let pageChat = document.querySelectorAll(".hidden");
	if (loginName.value) {
		loginName.classList.add("hidden");
		pageChat.forEach(el => el.classList.remove("hidden"));
		console.log(pageChat);
		let inputPage = document.getElementById("inputPage");
		inputPage.classList.add("hidden");

	}	

}