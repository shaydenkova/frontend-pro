var date = new Date;
var sec = document.getElementById("seconds");
secValue = date.getSeconds();
if (secValue < 10) {
    sec.innerHTML = "0" + secValue;
} else{
     sec.innerHTML = secValue;
};
var min = document.getElementById("minutes");
minValue = date.getMinutes();
if (minValue < 10) {
    min.innerHTML = "0" + minValue;
} else {
     min.innerHTML = minValue;
};
var hour = document.getElementById("hours");
hourValue = date.getHours();
if (hourValue < 10) {
    hour.innerHTML = "0" + hourValue;
} else {
    hour.innerHTML = hourValue;
}
var dateValue = document.getElementById("date");
var monthValue = date.getMonth();
let monthValueText;
switch (monthValue) {
    case 0: 
        monthValueText = "January";
        break;
    case 1: 
        monthValueText = "February";
        break;
    case 2: 
        monthValueText = "March";
        break;
    case 3:
        monthValueText = "April";
        break;
    case 4: 
        monthValueText = "May";
        break;
    case 5: 
        monthValueText = "June";
        break;
    case 6: 
        monthValueText = "July";
        break;
    case 7: 
        monthValueText = "August";
        break;
    case 8: 
        monthValueText = "September";
        break;
    case 9: 
        monthValueText = "October";
        break;
    case 10: 
        monthValueText = "November";
        break;
    case 11: 
        monthValueText = "December";
        break;
}
dateValue.innerHTML = date.getDate() + " " + monthValueText + " " + date.getFullYear();

setInterval(function () {
    var date = new Date;
    var sec = document.getElementById("seconds");
    secValue = date.getSeconds();
    if (secValue < 10) {
        sec.innerHTML = "0" + secValue;
    } else{
        sec.innerHTML = secValue;
    };
    var min = document.getElementById("minutes");
    minValue = date.getMinutes();
    if (minValue < 10) {
        min.innerHTML = "0" + minValue;
    } else {
        min.innerHTML = minValue;
    };
    var hour = document.getElementById("hours");
    hourValue = date.getHours();
    if (hourValue < 10) {
        hour.innerHTML = "0" + hourValue;
    } else {
        hour.innerHTML = hourValue;
    }
}, 1000);






