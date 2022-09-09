//Start signature to Callback event to QV_TJ88_MTX55
task.gridRowInsertingCallback.QV_TJ88_MTX55 = function (entities, gridRowInsertingCallbackEventArgs) {
    if (gridRowInsertingCallbackEventArgs.success) {
        gridRowInsertingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
        gridRowInsertingCallbackEventArgs.commons.api.grid.refresh('QV_TJ88_MTX55');
    }
};
