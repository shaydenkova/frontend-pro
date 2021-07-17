addTo.onclick = function(i) {
    i.preventDefault();
    const val = document.getElementById('nameOfEvent').value;
    if( val === '' || val === ' ') {
        alert('Введите текст');
    } else {
        const listElem = document.getElementById('listOfEvents');
        const eventElement = document.createElement('li');
        eventElement.textContent = val;
        eventElement.style.color = '#FFCC00';
        eventElement.style.listStyleType = 'none';
        eventElement.style.paddingTop = '20px';

        const btn = document.createElement('button');
        btn.textContent = "Сделано";

        const btnRemove = document.createElement('button');
        btnRemove.textContent = "Удалить";

        listElem.appendChild(eventElement);
        const str = document.createElement('p');
        str.textContent = "";
        eventElement.appendChild(str);
        eventElement.appendChild(btn);
        eventElement.appendChild(btnRemove);

        btn.onclick = function() {
            eventElement.style.color = 'green';
        }
    
        btnRemove.onclick = function() {
                const x = btnRemove.parentNode;
                x.remove();
        }
        
        document.getElementById('nameOfEvent').value='';
    }
}

resetBtn.onclick = function() {
    const parent = document.getElementById('listOfEvents');
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}










