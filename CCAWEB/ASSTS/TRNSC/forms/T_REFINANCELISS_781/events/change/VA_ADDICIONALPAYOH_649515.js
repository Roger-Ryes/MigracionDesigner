//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.addicionalPayMethod (DropDownList) View: RefinanceLoansFilter
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_ADDICIONALPAYOH_649515 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;

    if (changedEventArgs.commons.api.viewState.getDataItem("VA_ADDICIONALPAYOH_649515").pCobis == 4) {
        changedEventArgs.commons.api.viewState.show('VA_ACCOUNTYATVYIRL_740515');
    } else {
        changedEventArgs.commons.api.viewState.hide('VA_ACCOUNTYATVYIRL_740515');
    }
};
