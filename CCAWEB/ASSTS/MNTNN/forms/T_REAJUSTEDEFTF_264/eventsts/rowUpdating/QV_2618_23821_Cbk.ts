//Start signature to Callback event to QV_2618_23821
task_gridRowUpdatingCallback_QV_2618_23821 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowUpdatingCallbackEventArgs.success) {
        gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_SEDEBERZE_11967', false, null, this.ASSTS.timer);
    }
};
