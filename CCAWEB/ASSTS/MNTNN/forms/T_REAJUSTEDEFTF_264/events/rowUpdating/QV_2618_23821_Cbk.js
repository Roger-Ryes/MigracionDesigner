//Start signature to Callback event to QV_2618_23821
task.gridRowUpdatingCallback.QV_2618_23821 = function (entities, gridRowUpdatingCallbackEventArgs) {
    if (gridRowUpdatingCallbackEventArgs.success) {
        gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_SEDEBERZE_11967', false, null, timer);
    }
};
