//Entity: OperationItemsList
//OperationItemsList.amount (TextInputBox) View: ModalOperationItems
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_AMOUNTKDNIXSXCQ_807800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    if (entities.OperationItemsList.typeItem != 'V') {
    entities.OperationItemsList.calculationBase = changedEventArgs.newValue;
    }
};
