

//Entity: OtherCharges
//OtherCharges.value (TextInputBox) View: ProjectOtherCharges
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_VALUENGWHVWDDNU_188696 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    let value: any = entities.OtherCharges.value;
    if (value.length > 20) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_ELVALOREM_94145',fasle,null,timer);
    }
    changedEventArgs.commons.execServer = false;
};