

//Entity: Rates
//Rates.referenceValue (DropDownList) View: RatesModal
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_REFERENCEVALEEE_875778 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = true;
    //changedEventArgs.commons.serverParameters.Rates = true;

    };