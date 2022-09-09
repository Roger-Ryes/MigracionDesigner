//Start signature to Callback event to QV_2618_23821
task.gridRowDeletingCallback.QV_2618_23821 = function (entities, gridRowDeletingCallbackEventArgs) {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIMINAET_70731', false, null, timer);
    }
};
