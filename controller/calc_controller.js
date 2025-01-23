class CalcController {
    constructor() {
        this._displayCalc = "0";
        this._currentDate = null;
        this.initialize();
    }

    initialize() {
        let displaycalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displaycalcEl.innerHTML = "4567";
        dateEl.innerHTML = "12/12/2025"; 
        timeEl.innerHTML = "15:30";      
    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        this._displayCalc = valor;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(valor) {
        this._currentDate = valor;
    }
}
