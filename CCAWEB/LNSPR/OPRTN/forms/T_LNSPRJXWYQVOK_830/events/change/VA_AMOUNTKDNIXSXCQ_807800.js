//Entity: OperationItemsList
//OperationItemsList.amount (TextInputBox) View: ModalOperationItems
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_AMOUNTKDNIXSXCQ_807800 = function (entities, changedEventArgs) {
    changedEventArgs.commons.execServer = false;
    if (entities.OperationItemsList.typeItem != 'V') {
    entities.OperationItemsList.calculationBase = changedEventArgs.newValue;
    }
};
