class CalcController {
    constructor() {
        this._displayCalc = "0";
        this._currentDate = new Date();
        this._locale = 'pt-BR';
        
        this.displayCalcEl = document.querySelector("#display");
        this.dateEl = document.querySelector("#data");
        this.timeEl = document.querySelector("#hora");

        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {
        setInterval(() => {
            this.currentDate = new Date(); 
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        }, 1000);
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
      
        buttons.forEach((btn) => {
            
          
            this.addEventListenerAll(btn, "click drag", e => {
                let textBtn = btn.className.baseVal.replace("btn-", "");
                console.log(textBtn);  
            });

          
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
        });
    }
    
    addEventListenerAll(element, events, fn) {
        events.split(" ").forEach(event => {
            element.addEventListener(event, fn);
        });
    }

    get displayTime() {
        return this.timeEl.innerHTML; 
    }

    set displayTime(value) {
        this.timeEl.innerHTML = value; 
    }

    get displayDate() {
        return this.dateEl.innerHTML;
    }

    set displayDate(value) {
        this.dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalc; 
    }

    set displayCalc(value) {
        this._displayCalc = value;
        this.displayCalcEl.innerHTML = value; 
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(value) {
        this._currentDate = value;
    }
}
