function changeYear(x, y) {
	const element = document.getElementById('title');

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

function addString() {

} 

function deleteString() {
	const element = document.querySelector('table tbody');
	console.log(element.lastElementChild);
} 

changeYear(2021, 2020);

deleteA();

let color = "#66CDAA";
changeColor(color);

addString();

deleteString();
