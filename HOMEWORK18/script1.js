function getUserName() {
    let userName = document.getElementById("userName").value;
    if(userName) {
        var elem1 = document.getElementById("welcomeUser");
        var elem2 = document.getElementById("loginName");
        elem2.classList.add("hidden");
        elem1.classList.remove("hidden");
        document.cookie = "userID=" + userName;
        elem1.innerHTML = `Welcome, ${userName}!`;
    } else {
        alert("Please write login!");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var value = document.cookie.match(new RegExp('(^| )' + "userI5D" + '=([^;]+)'));
    if (value) {
        var elem1 = document.getElementById("welcomeUser");
        elem1.classList.remove("hidden");
        elem1.textContent = `Welcome, ${value[2]}!`;
    } else {
        var elem2 = document.getElementById("loginName");
        elem2.classList.remove("hidden");
    }
})




