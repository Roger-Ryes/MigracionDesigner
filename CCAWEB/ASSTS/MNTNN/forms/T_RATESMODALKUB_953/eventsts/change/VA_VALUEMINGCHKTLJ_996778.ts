//Entity: Rates
    //Rates.valueMin (TextInputBox) View: RatesModal
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_VALUEMINGCHKTLJ_996778 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = false;
    this.calculateTotal(2, entities.Rates, changeEventArgs);
        
    };