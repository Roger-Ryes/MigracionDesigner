

//Entity: LoanSearchFilter
//LoanSearchFilter.status (DropDownList) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_STATUSRUGGOTSMF_965508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    //changedEventArgs.commons.serverParameters.LoanSearchFilter = true;
     changedEventArgs.commons.api.grid.removeAllRows("Loan");

};