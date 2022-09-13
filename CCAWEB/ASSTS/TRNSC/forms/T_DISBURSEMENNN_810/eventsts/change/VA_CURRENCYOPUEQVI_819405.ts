

//Entity: LoanAdditionalInformation
//LoanAdditionalInformation.currencyOp (DropDownList) View: DisbursementForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
//designer-hint: 2304: Cannot find name 'task_change_VA_CURRENCYOPUEQVI_819405'.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 2304: Cannot find name 'CobisModelChangeEventArgs'.
//designer-hint: 6133: 'entities' is declared but its value is never read.
task_change_VA_CURRENCYOPUEQVI_819405 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = true;
    //changedEventArgs.commons.serverParameters.LoanAdditionalInformation = true;

};