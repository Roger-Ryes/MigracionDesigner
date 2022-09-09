
//Start signature to Callback event to QV_PJ68_WJJ41
task_gridRowDeletingCallback_QV_PJ68_WJJ41 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
     if(gridRowDeletingCallbackEventArgs.success){
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, this.ASSTS.timer);
    }
};
