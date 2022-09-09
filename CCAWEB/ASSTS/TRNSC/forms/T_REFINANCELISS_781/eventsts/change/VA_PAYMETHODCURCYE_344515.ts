//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.payMethodCurrency (DropDownList) View: RefinanceLoansFilter
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_PAYMETHODCURCYE_344515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = true;

    changedEventArgs.commons.api.viewState.hide('VA_ACCOUNTYATVYIRL_740515');
};
