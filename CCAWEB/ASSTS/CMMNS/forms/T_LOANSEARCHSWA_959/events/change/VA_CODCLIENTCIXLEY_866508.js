

//Entity: LoanSearchFilter
//LoanSearchFilter.numIdentification (TextInputButton) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_CODCLIENTCIXLEY_866508 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;

    changedEventArgs.commons.api.grid.removeAllRows("Loan");
};