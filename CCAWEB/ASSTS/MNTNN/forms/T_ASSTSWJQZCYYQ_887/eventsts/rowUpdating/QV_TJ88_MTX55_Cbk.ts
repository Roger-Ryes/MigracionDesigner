//Start signature to Callback event to QV_TJ88_MTX55
task_gridRowUpdatingCallback_QV_TJ88_MTX55 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowUpdatingCallbackEventArgs.success) {
        gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, timer);
        gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_TJ88_MTX55');
    }
};
