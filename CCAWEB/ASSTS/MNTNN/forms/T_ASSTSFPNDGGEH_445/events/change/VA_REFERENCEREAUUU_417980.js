//Entity: LoanItemsList
//LoanItemsList.referenceReadjustment (TextInputBox) View: ModalLoanItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_REFERENCEREAUUU_417980 = function (entities, changedEventArgs) {

    if (changedEventArgs.newValue && cambio) {
        changedEventArgs.commons.execServer = true;
    } else {
        changedEventArgs.commons.execServer = false;
        cambio = true;
    }

};
