

//Entity: LoanSearchFilter
//LoanSearchFilter.numIdentification (TextInputButton) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_CODCLIENTCIXLEY_866508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    changedEventArgs.commons.api.grid.removeAllRows("Loan");
};