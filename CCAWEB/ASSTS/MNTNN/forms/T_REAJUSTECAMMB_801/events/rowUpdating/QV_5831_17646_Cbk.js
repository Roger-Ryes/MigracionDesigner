//Start signature to Callback event to QV_5831_17646
task.gridRowUpdatingCallback.QV_5831_17646 = function (entities, gridRowUpdatingCallbackEventArgs) {
    if (gridRowUpdatingCallbackEventArgs.success) {
        gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_SEDEBERZE_11967', false, null, timer);
    }
};
