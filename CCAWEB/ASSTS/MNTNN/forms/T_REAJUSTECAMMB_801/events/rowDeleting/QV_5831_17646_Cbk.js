//Start signature to Callback event to QV_5831_17646
task.gridRowDeletingCallback.QV_5831_17646 = function (entities, gridRowDeletingCallbackEventArgs) {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIMINAET_70731', false, null, timer);
    }
};
