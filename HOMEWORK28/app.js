

// function sendMessageToChat() {
       
// 		let msg = document.getElementById("inputmessage").value;
//         let name = localStorage.getItem("username");
//         let obj = {
//             type: "message",
//             payload: {
//                 username: name,
//                 message: msg
//             }
// }

// 	ws.onopen = function () {
// 		ws.send(JSON.stringify(obj));
// 	}
// 	ws.onmessage = (event) =>{
// 		let data = JSON.parse(event.data);
//         let mydate = new Date('01/01/1970');
//         let dataText = mydate + " " + data.payload.username +": "+ data.payload.message;
//         createChatMessage(dataText);
// 	}
// 	ws.onclose = () => console.log('ws closed');
// }

function createChatMessage(e) {
    const chatBlock = document.getElementById("chatmessages");
    console.log(chatBlock);
    const msgBlock = document.createElement("p");
    msgBlock.innerHTML = e;
    console.log(msgBlock);
    chatBlock.appendChild(msgBlock);
}


function checkId() {
	let loginName = document.getElementById("loginInput").value;
	if (loginName) {
        showChat(loginName);
        localStorage.setItem("username", loginName);
        let loginPage = document.getElementById("inputPage");
        loginPage.classList.add("hidden");
        // document.getElementById("loginInput").innerHTML =""; 
	} else {
        alert("Please enter your login");
    }	
}

window.onload = function () {
    let name = localStorage.getItem("username");
    if(name) {
        showChat(name);
    } else {
        showLoginPage();
    }
}

function showChat(n) {
    let appPage = document.getElementById("appChat");
    appPage.classList.remove("hidden");
    let name = document.getElementById("name");
    name.innerHTML = n;
}

function showLoginPage() {
    let loginPage = document.getElementById("inputPage");
    loginPage.classList.remove("hidden");
}


let ws = new WebSocket ("wss://fep-app.herokuapp.com/");
btnSend.onclick = function () {
    var msg = document.getElementById("inputmessage").value;
    let name = localStorage.getItem("username");
        let obj = {
            type: "message",
            payload: {
                username: name,
                message: msg
            }   
        }
    ws.send(JSON.stringify(obj));
    return false;
} 
   
ws.onmessage = (event) =>{
        let data = JSON.parse(event.data);
        let mydate = new Date();
        let dataText = mydate.toLocaleDateString() + " " + mydate.toLocaleTimeString().slice(0,-3) + " " + data.payload.username +": "+ data.payload.message;
        createChatMessage(dataText);
}

ws.onclose = () => console.log('ws closed');

function signOut() {
    localStorage.clear();
    showLoginPage();
    hideChatPage();
}

function hideChatPage() {
    let appPage = document.getElementById("appChat");
    appPage.classList.add("hidden");
}