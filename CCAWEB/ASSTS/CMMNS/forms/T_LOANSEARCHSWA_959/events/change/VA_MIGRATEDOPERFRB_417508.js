

//Entity: LoanSearchFilter
//LoanSearchFilter.migratedOper (TextInputBox) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_MIGRATEDOPERFRB_417508 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
     changedEventArgs.commons.api.grid.removeAllRows("Loan");

};