//Start signature to Callback event to QV_2618_23821
task_gridRowDeletingCallback_QV_2618_23821 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIMINAET_70731', false, null, this.ASSTS.timer);
    }
};
