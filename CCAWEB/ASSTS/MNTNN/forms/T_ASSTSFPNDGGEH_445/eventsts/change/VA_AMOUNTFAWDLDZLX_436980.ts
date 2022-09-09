//Entity: LoanItemsList
//LoanItemsList.amount (TextInputBox) View: ModalLoanItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_AMOUNTFAWDLDZLX_436980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    if (entities.LoanItemsList.typeItem != 'V') {
        entities.LoanItemsList.calculationBase = changedEventArgs.newValue;
    }

};
