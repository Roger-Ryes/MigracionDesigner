//Start signature to Callback event to QV_MD41_JYZ75
task_gridRowDeletingCallback_QV_MD41_JYZ75 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
        gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_MD41_JYZ75');
    }
};
