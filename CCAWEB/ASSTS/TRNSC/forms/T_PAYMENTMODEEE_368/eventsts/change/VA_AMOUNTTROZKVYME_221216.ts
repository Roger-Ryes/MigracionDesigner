//Entity: PaymentForm
//PaymentForm.amountTr (TextInputBox) View: PaymentModeForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_AMOUNTTROZKVYME_221216 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    if (changedEventArgs.newValue > entities.DisbursementResult.difference!) {
        changedEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_VALORDEEA_97215', false, null, this.ASSTS.timer);
        // changeEventArgs.commons.api.viewState.disable('VA_4212YIFTVBCOPPD_140216');
    }

};
