//Start signature to Callback event to QV_MD41_JYZ75
task_gridRowUpdatingCallback_QV_MD41_JYZ75 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowUpdatingCallbackEventArgs.success) {
        gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
        gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_MD41_JYZ75');
    }
};
