class Calculator {
        #theNum;
        #oldNum; 
    static el(element) {
      if (element.charAt(0) === "#") { 
        return document.querySelector(element);
      }
        return document.querySelectorAll(element);
    }

    constructor() {
        this.viewer = Calculator.el("#viewer");
        this.equals = Calculator.el("#equals");
        this.nums = Calculator.el(".num");
        this.ops = Calculator.el(".ops"); 
        this.resultNum; 
        this.operator; 
        this.#theNum = "";
        this.#oldNum = ""; 

        for (let i = 0, l = this.nums.length; i < l; i++) {
            this.nums[i].onclick = this.setNum.bind(this);
        }
        
        for (let i = 0, l = this.ops.length; i < l; i++) {
            this.ops[i].onclick = this.moveNum.bind(this);
        }
        
        this.equals.onclick = this.displayNum.bind(this);
        
        Calculator.el("#clear").onclick = this.clearAll.bind(this);
                  
        Calculator.el("#reset").onclick = function() {
            window.location = window.location;
        }
    }
      
    setNum(e) {
      if (this.resultNum) {
        this.#theNum = e.target.getAttribute("data-num");
        this.resultNum = "";
      } else { 
        this.#theNum +=  e.target.getAttribute("data-num");
      }
      this.viewer.innerHTML = this.#theNum; 
    }
  
    moveNum(e) {
        this.#oldNum = this.#theNum;
        this.#theNum = "";
        this.operator = e.target.getAttribute("data-ops");
        this.equals.setAttribute("data-result", "");
    }
  
    displayNum() {
        this.#oldNum = parseFloat(this.#oldNum);
        this.#theNum = parseFloat(this.#theNum);
        
        switch (this.operator) {
            case "plus":
                this.resultNum = this.#oldNum + this.#theNum;
            break;
    
            case "minus":
                this.resultNum = this.#oldNum - this.#theNum;
            break;
    
            case "times":
                this.resultNum = this.#oldNum * this.#theNum;
            break;
    
            case "divided by":
                this.resultNum = this.#oldNum / this.#theNum;
            break;
            
            default:
                this.resultNum = this.#theNum;
        }
        
        if (!isFinite(this.resultNum)) {
            if (isNaN(this.resultNum)) { 
                this.resultNum = "You broke it!";
            } else {
                this.resultNum = "Look at what you've done";
                this.el('#calculator').classList.add("broken"); 
                this.el('#reset').classList.add("show");
            }
        }
       
      this.viewer.innerHTML = this.resultNum;
      this.equals.setAttribute("data-result", this.resultNum);
  
      // Now reset oldNum & keep result
      this.#oldNum = 0;
      this.#theNum = this.resultNum;
    }
  
    clearAll() {
      this.#oldNum = "";
      this.displayNumtheNum = "";
      this.viewer.innerHTML = "0";
      this.equals.setAttribute("data-result", this.resultNum);
    }
  }
  
new Calculator();
 
   
  