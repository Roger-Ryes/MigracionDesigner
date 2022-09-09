

//Entity: LoanSearchFilter
//LoanSearchFilter.status (DropDownList) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_STATUSRUGGOTSMF_965508 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    //changedEventArgs.commons.serverParameters.LoanSearchFilter = true;
     changedEventArgs.commons.api.grid.removeAllRows("Loan");

};