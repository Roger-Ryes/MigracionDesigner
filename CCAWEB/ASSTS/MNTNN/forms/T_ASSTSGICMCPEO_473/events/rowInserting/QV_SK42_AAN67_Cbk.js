//Start signature to Callback event to QV_SK42_AAN67
task.gridRowInsertingCallback.QV_SK42_AAN67 = function (entities, gridRowInsertingCallbackEventArgs) {
    if (gridRowInsertingCallbackEventArgs.success) {
        gridRowInsertingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
        gridRowInsertingCallbackEventArgs.commons.api.grid.refresh('QV_SK42_AAN67');
    }
};
