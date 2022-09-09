//Start signature to Callback event to QV_MD41_JYZ75
task.gridRowDeletingCallback.QV_MD41_JYZ75 = function (entities, gridRowDeletingCallbackEventArgs) {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
        gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_MD41_JYZ75');
    }
};
