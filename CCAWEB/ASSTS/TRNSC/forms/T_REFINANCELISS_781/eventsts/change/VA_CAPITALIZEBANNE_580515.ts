

//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.capitalizeBalance (RadioButtonList) View: RefinanceLoansFilter
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_CAPITALIZEBANNE_580515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = true;
    //changedEventArgs.commons.serverParameters.RefinanceLoanFilter = true;

};