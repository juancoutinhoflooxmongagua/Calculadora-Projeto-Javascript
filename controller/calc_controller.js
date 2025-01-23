class CalcController {
    constructor(){
       this._displayCalc = "0";
       this._currentDate;
       this.initialize;
    }

    initialize(){
        
    }

    get displaycalc(){
        return this._displayCalc;
    }

    set displaycalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
       return this._actual_Date;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}