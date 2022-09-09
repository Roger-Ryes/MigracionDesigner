//Start signature to Callback event to QV_TJ88_MTX55
task.gridRowDeletingCallback.QV_TJ88_MTX55 = function (entities, gridRowDeletingCallbackEventArgs) {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
        gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_TJ88_MTX55');
    }
};
