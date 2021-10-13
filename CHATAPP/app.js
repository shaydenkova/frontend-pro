
window.onload = function () {
    let name = localStorage.getItem("username");
    if(name) {
        showChat(name);
    } else {
        showLoginPage();
    }
}

function checkId() {
    let loginName = document.getElementById("loginInput").value;
    loginInput.value = "";
    if (loginName) {
        showChat(loginName);
        localStorage.setItem("username", loginName);
        let loginPage = document.getElementById("inputPage");
        loginPage.classList.add("hidden");
    } else {
        alert("Please enter your login");
    }   
}

function showChat(n) {
    connect();
    let appPage = document.getElementById("appChat");
    appPage.classList.remove("hidden");
    let name = document.getElementById("name");
    name.innerHTML = n;
}

function showLoginPage() {
    let loginPage = document.getElementById("inputPage");
    loginPage.classList.remove("hidden");
}

function signOut() {
    localStorage.clear();
    showLoginPage();
    hideChatPage();
}

function hideChatPage() {
    let appPage = document.getElementById("appChat");
    appPage.classList.add("hidden");
}


function createChatMessage(e) {
    const msgBlock = document.createElement("p");
    msgBlock.innerHTML = e;
    chatmessages.appendChild(msgBlock);
    saveMsgToLocalStorage();
}

function saveMsgToLocalStorage() {
    let messages = [];
    document.querySelectorAll(".chatmessages p").forEach(p => messages.push(p.outerHTML))
    localStorage.messages = messages;
}

function connect(){
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
        inputmessage.value = '';
        return false;
    } 
    
    ws.onmessage = (event) =>{
            let data = JSON.parse(event.data);
            let mydate = new Date();
            let dataText = mydate.toLocaleDateString() + " " + mydate.toLocaleTimeString().slice(0,-3) + " " + data.payload.username +": "+ data.payload.message;
            createChatMessage(dataText);
    }

    ws.onclose = () => {
      if (document.getElementById("reconnection").checked=true) {
          connect();
          console.log('ws closed')
      } else {
        console.log('ws closed');
        }
    }
   signOut.onclick = function () {
    console.log("2");
             
    }
}

