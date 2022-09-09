

//Entity: LoanSearchFilter
//LoanSearchFilter.office (DropDownList) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_OFFICEVEGBCEQOG_104508 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
     changedEventArgs.commons.api.grid.removeAllRows("Loan");

};