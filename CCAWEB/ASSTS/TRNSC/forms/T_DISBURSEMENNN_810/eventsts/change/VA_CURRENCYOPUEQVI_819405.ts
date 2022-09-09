

//Entity: LoanAdditionalInformation
//LoanAdditionalInformation.currencyOp (DropDownList) View: DisbursementForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_CURRENCYOPUEQVI_819405 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = true;
    //changedEventArgs.commons.serverParameters.LoanAdditionalInformation = true;

};