//Entity: Rates
    //Rates.signDefault (ComboBox) View: RatesModal
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_SIGNMINPDDMQZST_831778 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = false;
    this.calculateTotal(1, entities.Rates, changeEventArgs);
        
    };