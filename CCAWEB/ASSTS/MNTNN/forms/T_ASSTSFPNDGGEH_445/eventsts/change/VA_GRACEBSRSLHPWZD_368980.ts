//Entity: LoanItemsList
//LoanItemsList.reference (TextInputBox) View: ModalLoanItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_GRACEBSRSLHPWZD_368980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    if (changedEventArgs.newValue) {
        changedEventArgs.commons.execServer = true;
    } else {
        changedEventArgs.commons.execServer = false;
    }

};
