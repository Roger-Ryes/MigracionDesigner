//Entity: OperationItemsList
//OperationItemsList.paymentMethod (DropDownList) View: ModalOperationItems
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_PAYMENTMETHODDD_767800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'L') {
        changedEventArgs.commons.api.viewState.enable('VA_FINANCEDTQRTUFB_342800');
    } else {
        changedEventArgs.commons.api.viewState.disable('VA_FINANCEDTQRTUFB_342800');
    }
};
