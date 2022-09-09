//Start signature to Callback event to QV_MD41_JYZ75
task.gridRowUpdatingCallback.QV_MD41_JYZ75 = function (entities, gridRowUpdatingCallbackEventArgs) {
    if (gridRowUpdatingCallbackEventArgs.success) {
        gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
        gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_MD41_JYZ75');
    }
};
