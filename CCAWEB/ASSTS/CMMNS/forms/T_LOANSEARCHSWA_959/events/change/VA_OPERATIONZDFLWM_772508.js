

//Entity: LoanSearchFilter
//LoanSearchFilter.operation (TextInputBox) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_OPERATIONZDFLWM_772508 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
     changedEventArgs.commons.api.grid.removeAllRows("Loan");

};