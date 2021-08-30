class Hamburger {
	constructor(size) { 
		this.size = size;
		this.toppings = [];
	}
	addTopping(item) {
		this.toppings.push(item);
	}
	getPrice() {
		let toppingPrice = 0;
		for (let i = 0; i < this.toppings.length; i++) {
				toppingPrice += this.toppings[i].price;
		}
		return this.size.price + toppingPrice;
	}
	getCalories() {
		let toppingCalories = 0;
		for (let i = 0; i < this.toppings.length; i++) {
				toppingCalories += this.toppings[i].calories;
		}
		return this.size.calories + toppingCalories;
	}
	static SIZE_SMALL = {price: 50, calories: 20};
	static SIZE_MEDIUM = {price: 75, calories: 30};
	static SIZE_BIG = {price: 100, calories: 40};
	static TOPPING_CHEESE = {price: 10, calories: 20};
	static TOPPING_SALADE = {price: 20, calories: 5};
	static TOPPING_POTATO = {price: 15, calories: 10};
	static TOPPING_SPICE = {price: 15, calories: 0};
	static TOPPING_MAYO = {price: 52, calories: 50};
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);


console.log("Price with sauce: " + hamburger.getPrice());
console.log("Calories with sauce: " + hamburger.getCalories());

