yearBtn.onclick = function(i) {
    const element = document.querySelector('#title span');
    const val = document.getElementsByName("year")[0].value;
    if(+val > 1990 && +val < 2022) {
        element.textContent = val;
    } else {
        alert('Введите год');
        i.preventDefault();
    }
}

function load() {
    removeAttrBtn.addEventListener ('click', () => {    
    const elements = document.querySelectorAll('[data-id="revenue-value"]');
	    for (let i = 0; i < elements.length; i++) {
		    elements[i].removeAttribute("my-attribute");
	    }
    })

    setGreenBtn.addEventListener ('click', (event) => {    
        const elements = document.querySelectorAll('[data-id="revenue-value"]');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.background = "#66CDAA";
        }
        event.stopPropagation();
    }, true)

    removeSecondRowBtn.addEventListener ('click', () => {
        const element = document.querySelector('tbody > tr:nth-child(2)');
        element.remove();
    })
}

addRowBtn.onclick = function() {
    const newRow = document.createElement('tr');
	const newColumnOne = document.createElement('td');
	const newColumnTwo = document.createElement('td');
	const newColumnThree = document.createElement('td');
	newColumnOne.textContent = "Central";
	newColumnTwo.textContent = "Ivanov";
	newColumnThree.textContent = "5000";

	const tableParent = document.querySelector('tbody');
	const lastRow =  document.querySelector('tbody > tr:last-child');

	newRow.appendChild(newColumnOne);
	newRow.appendChild(newColumnTwo);
	newRow.appendChild(newColumnThree);
	tableParent.insertBefore(newRow, lastRow);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const elem = document.getElementById('title');
    elem.style.fontSize = '24px';
})




