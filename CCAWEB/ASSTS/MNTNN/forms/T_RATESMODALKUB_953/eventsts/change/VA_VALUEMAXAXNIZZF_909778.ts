//Entity: Rates
    //Rates.valueMax (TextInputBox) View: RatesModal
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_VALUEMAXAXNIZZF_909778 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = false;
    this.calculateTotal(3, entities.Rates, changeEventArgs);
        
    };