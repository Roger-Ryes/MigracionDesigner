//Start signature to Callback event to QV_SK42_AAN67
task_gridRowUpdatingCallback_QV_SK42_AAN67 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowUpdatingCallbackEventArgs.success) {
        gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_OPERACIRT_74079', false, null, this.ASSTS.timer);
        gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_SK42_AAN67');
    }
};
