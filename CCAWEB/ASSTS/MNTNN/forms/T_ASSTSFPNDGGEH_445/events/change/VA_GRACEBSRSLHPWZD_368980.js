//Entity: LoanItemsList
//LoanItemsList.reference (TextInputBox) View: ModalLoanItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_GRACEBSRSLHPWZD_368980 = function (entities, changedEventArgs) {
    if (changedEventArgs.newValue) {
        changedEventArgs.commons.execServer = true;
    } else {
        changedEventArgs.commons.execServer = false;
    }

};
