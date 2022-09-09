//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.payMethodCurrency (DropDownList) View: RefinanceLoansFilter
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_PAYMETHODCURCYE_344515 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = true;

    changedEventArgs.commons.api.viewState.hide('VA_ACCOUNTYATVYIRL_740515');
};
