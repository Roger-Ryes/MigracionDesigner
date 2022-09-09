

//Entity: LoanSearchFilter
//LoanSearchFilter.numProcedures (TextInputBox) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_NUMPROCEDURESSS_195508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
     changedEventArgs.commons.api.grid.removeAllRows("Loan");

};