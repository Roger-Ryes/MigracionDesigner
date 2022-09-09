//Start signature to Callback event to QV_TJ88_MTX55
task_gridRowDeletingCallback_QV_TJ88_MTX55 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, this.ASSTS.timer);
        gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_TJ88_MTX55');
    }
};
