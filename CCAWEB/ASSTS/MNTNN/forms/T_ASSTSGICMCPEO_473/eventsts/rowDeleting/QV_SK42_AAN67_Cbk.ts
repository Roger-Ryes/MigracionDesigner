//Start signature to Callback event to QV_SK42_AAN67
task_gridRowDeletingCallback_QV_SK42_AAN67 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, this.ASSTS.timer);
        gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_SK42_AAN67');
    }
};
