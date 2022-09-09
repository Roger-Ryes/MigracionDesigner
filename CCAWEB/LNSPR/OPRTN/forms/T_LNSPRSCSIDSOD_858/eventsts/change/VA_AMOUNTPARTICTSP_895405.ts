//Entity: OperationEntity
//OperationEntity.amountParticipants (TextInputBox) View: SyndicatedListForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_AMOUNTPARTICTSP_895405 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (entities.OperationEntity.amount >= entities.OperationEntity.amountParticipants) {
        entities.OperationEntity.percentageParticipants = (entities.OperationEntity.amountParticipants * 100) / entities.OperationEntity.amount

    } else {
        changedEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ELVALOREP_52967", false, null, timer);
    }

    changedEventArgs.commons.execServer = false;

};
