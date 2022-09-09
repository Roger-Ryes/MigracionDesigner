

//Entity: LoanSearchFilter
//LoanSearchFilter.type (DropDownList) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_TYPEDCJJSHZRQGI_148508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("Loan");

};