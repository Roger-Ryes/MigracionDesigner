

//Entity: LoanSearchFilter
//LoanSearchFilter.disbursementDate (DateField) View: StatusChangeMassive
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_DISBURSEMENTETD_259293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

};