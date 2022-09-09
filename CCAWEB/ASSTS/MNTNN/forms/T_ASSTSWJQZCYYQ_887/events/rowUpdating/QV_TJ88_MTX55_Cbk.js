//Start signature to Callback event to QV_TJ88_MTX55
task.gridRowUpdatingCallback.QV_TJ88_MTX55 = function (entities, gridRowUpdatingCallbackEventArgs) {
    if (gridRowUpdatingCallbackEventArgs.success) {
        gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
        gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_TJ88_MTX55');
    }
};
