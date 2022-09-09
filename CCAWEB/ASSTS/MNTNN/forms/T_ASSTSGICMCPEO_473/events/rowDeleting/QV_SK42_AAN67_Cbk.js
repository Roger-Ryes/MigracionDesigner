//Start signature to Callback event to QV_SK42_AAN67
task.gridRowDeletingCallback.QV_SK42_AAN67 = function (entities, gridRowDeletingCallbackEventArgs) {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
        gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_SK42_AAN67');
    }
};
