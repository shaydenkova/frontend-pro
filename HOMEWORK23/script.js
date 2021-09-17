class Calculator {
  static el(element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  }

  setNum() {
    if (resultNum) { // If a result was displayed, reset number
      theNum = this.getAttribute("data-num");
      resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      theNum += this.getAttribute("data-num");
    }
    viewer.innerHTML = theNum; // Display current number
  }

  moveNum() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); // Reset result in attr
  }

  displayNum() {
    // Convert string input to numbers
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    // Perform operation
    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "times":
        resultNum = oldNum * theNum;
        break;

      case "divided by":
        resultNum = oldNum / theNum;
        break;

        // If equal is pressed without an operator, keep number and continue
      default:
        resultNum = theNum;
    }

    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
        resultNum = "You broke it!";
      } else { // If result is infinity, set off by dividing by zero
        resultNum = "Look at what you've done";
        el('#calculator').classList.add("broken"); // Break calculator
        el('#reset').classList.add("show"); // And show reset button
      }
    }

    // Display result, finally!
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Now reset oldNum & keep result
    oldNum = 0;
    theNum = resultNum;
  }

  clearAll() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  }
}


let calculator = new Calculator();

let viewer = calculator.el("#viewer");
let equals = calculator.el("#equals");
let nums = calculator.el(".num");
let ops = calculator.el(".ops"); 
let theNum = ""; // Current number
let oldNum = ""; // First number
let resultNum; // Result
let operator; //

 
for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = calculator.setNum;
  }

  // Add click event to operators
for (var i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = calculator.moveNum;
}
  // Add click event to equal sign
equals.onclick = calculator.displayNum;

  // Add click event to clear button
calculator.el("#clear").onclick = calculator.clearAll;

  // Add click event to reset button
calculator.el("#reset").onclick = function() {
    window.location = window.location;
};


