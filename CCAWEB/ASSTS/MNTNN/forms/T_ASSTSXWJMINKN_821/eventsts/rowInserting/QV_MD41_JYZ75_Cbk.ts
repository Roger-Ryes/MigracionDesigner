//Start signature to Callback event to QV_MD41_JYZ75
task_gridRowInsertingCallback_QV_MD41_JYZ75 = (
    entities: Model,
    gridRowInsertingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowInsertingCallbackEventArgs.success) {
        gridRowInsertingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, this.ASSTS.timer);
        gridRowInsertingCallbackEventArgs.commons.api.grid.refresh('QV_MD41_JYZ75');
    }
};
