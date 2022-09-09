//Entity: Payment
//Payment.currencyType (DropDownList) View: PaymentsForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_CURRENCYSPEYFQA_285141 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = true;
    //changedEventArgs.commons.serverParameters.Payment = true;
        
    };