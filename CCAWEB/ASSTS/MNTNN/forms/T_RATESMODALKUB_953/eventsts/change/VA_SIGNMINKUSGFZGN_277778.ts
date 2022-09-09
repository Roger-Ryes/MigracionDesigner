//Entity: Rates
    //Rates.signMin (ComboBox) View: RatesModal
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_SIGNMINKUSGFZGN_277778 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = false;
    this.calculateTotal(2, entities.Rates, changeEventArgs);
        
    };