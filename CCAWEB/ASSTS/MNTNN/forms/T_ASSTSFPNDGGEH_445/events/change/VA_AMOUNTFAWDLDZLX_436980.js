//Entity: LoanItemsList
//LoanItemsList.amount (TextInputBox) View: ModalLoanItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_AMOUNTFAWDLDZLX_436980 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;

    if (entities.LoanItemsList.typeItem != 'V') {
        entities.LoanItemsList.calculationBase = changedEventArgs.newValue;
    }

};
