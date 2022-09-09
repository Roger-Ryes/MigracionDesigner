//Entity: LoanItemsList
//LoanItemsList.referenceReadjustment (TextInputBox) View: ModalLoanItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_REFERENCEREAUUU_417980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (changedEventArgs.newValue && cambio) {
        changedEventArgs.commons.execServer = true;
    } else {
        changedEventArgs.commons.execServer = false;
        cambio = true;
    }

};
