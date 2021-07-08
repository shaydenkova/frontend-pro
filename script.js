const obj = {
	name: 'Alina', 
	age: 23,
	adress: {
		country: 'UA',
		city: 'Kyiv'
	}
}

function copyObject(a) {
	const copy = {};
	const objectKeys = Object.keys(a);

	for (let i = 0; i < objectKeys.length; i++) {
			if (typeof a[objectKeys[i]] !== "object") {
				copy[objectKeys[i]] = a[objectKeys[i]];
			} else {
				let x = a[objectKeys[i]];
				copy[objectKeys[i]] = copyObject(x);
			}
		}
	return copy; 
}

const objCopy = copyObject(obj);
console.log(objCopy);


