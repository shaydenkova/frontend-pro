function changeYear(y) {
	const element = document.querySelector('#title span');
	element.textContent = y;
}

function deleteA() {
	const elements = document.querySelectorAll('[data-id="revenue-value"]');
	for (let i = 0; i < elements.length; i++) {
		elements[i].removeAttribute("my-attribute");
	}
}

function changeColor(a) {
	const elements = document.querySelectorAll('[data-id="revenue-value"]');
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.background = a;
	}
}

function addRow() {
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

function deleteRow() {
	const element = document.querySelector('tbody > tr:first-child');
	element.remove();
} 

changeYear(2020);

deleteA();

let color = "#66CDAA";
changeColor(color);

addRow();

deleteRow();
