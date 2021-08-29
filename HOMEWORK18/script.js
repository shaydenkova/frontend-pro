function getUserName() {
    let userName = document.getElementById("userName").value;
    if(userName) {
        var elem1 = document.getElementById("welcomeUser");
        var elem2 = document.getElementById("loginName");
        elem2.classList.add("hidden");
        elem1.classList.remove("hidden");
        localStorage.setItem("userID", userName);
        elem1.innerHTML = `Welcome, ${userName}!`;
    } else {
        alert("Please write login!");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if("userID" in localStorage) {
        var elem = document.getElementById("welcomeUser");
        elem.classList.remove("hidden");
        let x = localStorage.getItem("userID");
        elem.textContent = `Welcome, ${x}!`;
    } else {
        var elem2 = document.getElementById("loginName");
        elem2.classList.remove("hidden");
    }
})




