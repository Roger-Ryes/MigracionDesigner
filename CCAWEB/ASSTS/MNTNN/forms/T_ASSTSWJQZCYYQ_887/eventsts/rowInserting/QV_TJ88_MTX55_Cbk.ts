//Start signature to Callback event to QV_TJ88_MTX55
task_gridRowInsertingCallback_QV_TJ88_MTX55 = (
    entities: Model,
    gridRowInsertingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowInsertingCallbackEventArgs.success) {
        gridRowInsertingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, this.ASSTS.timer);
        gridRowInsertingCallbackEventArgs.commons.api.grid.refresh('QV_TJ88_MTX55');
    }
};
