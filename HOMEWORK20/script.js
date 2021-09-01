function removeItem(event) {
    var i = event.currentTarget.parentElement.parentElement;
    while (i.firstChild) {
        i.firstChild.remove();     
      }
    getTotalAmount()
}

function addItem() {
    var nameValue = document.getElementById("nameItem").value;
    var priceValue =  document.getElementById("priceItem").value;
    var quantityValue =  document.getElementById("quantItem").value;
    if (nameValue && priceValue && quantityValue) {
        if (!isNaN(priceValue) && !isNaN(quantityValue)) {
            var item = document.getElementById("tableBody");
            var row = document.createElement("tr");
            var col1 = document.createElement("td");
            var col2 = document.createElement("td");
            var col3 = document.createElement("td");
            var col4 = document.createElement("td");
            var col5 = document.createElement("td");
            var btnDelete = document.createElement("button");
            btnDelete.setAttribute("onclick", "removeItem(event)");
            btnDelete.classList.add("btn");
            btnDelete.textContent = "Удалить";
            col1.textContent = nameValue;
            col2.textContent = priceValue;
            col3.textContent = quantityValue;
            col4.textContent = priceValue * quantityValue;
            col4.classList.add("totalItemAmount");
            col5.appendChild(btnDelete);
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            row.appendChild(col4);
            row.appendChild(col5);
            item.insertBefore(row, item.lastChild);
            clear();
        } else {
            alert("Введите число");
            clear();
    }} else {
        alert("Введите данные");
        clear();
    }
    getTotalAmount()
}

function clear() {
    var i = document.querySelectorAll("input");
    i.forEach (elem => elem.value = "");
}

function getTotalAmount() {
    const arrayOfAmounts = document.querySelectorAll(".totalItemAmount");
    let result = 0;
    arrayOfAmounts.forEach (elem => result = +elem.textContent + result);
    let resultTotal = document.getElementById("totalAmount");
    resultTotal.textContent = "Общая сумма: " + result;
}

getTotalAmount();
