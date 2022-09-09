
//Start signature to Callback event to QV_PJ68_WJJ41
task.gridRowDeletingCallback.QV_PJ68_WJJ41 = function(entities, gridRowDeletingCallbackEventArgs) {
     if(gridRowDeletingCallbackEventArgs.success){
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, timer);
    }
};
