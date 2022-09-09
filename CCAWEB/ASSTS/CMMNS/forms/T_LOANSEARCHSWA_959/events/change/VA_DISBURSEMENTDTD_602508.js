

//Entity: LoanSearchFilter
//LoanSearchFilter.disbursementDate (DateField) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_DISBURSEMENTDTD_602508 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
     changedEventArgs.commons.api.grid.removeAllRows("Loan");

};