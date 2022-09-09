//Start signature to Callback event to QV_SK42_AAN67
task.gridRowUpdatingCallback.QV_SK42_AAN67 = function (entities, gridRowUpdatingCallbackEventArgs) {
    if (gridRowUpdatingCallbackEventArgs.success) {
        gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
        gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_SK42_AAN67');
    }
};
