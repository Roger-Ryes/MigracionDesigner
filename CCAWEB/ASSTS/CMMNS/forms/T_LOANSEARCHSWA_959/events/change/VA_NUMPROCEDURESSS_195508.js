

//Entity: LoanSearchFilter
//LoanSearchFilter.numProcedures (TextInputBox) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_NUMPROCEDURESSS_195508 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
     changedEventArgs.commons.api.grid.removeAllRows("Loan");

};