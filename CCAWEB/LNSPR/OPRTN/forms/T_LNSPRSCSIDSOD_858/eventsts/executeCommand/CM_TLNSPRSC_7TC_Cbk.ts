//Start signature to Callback event to CM_TLNSPRSC_7TC
task_executeCommandCallback_CM_TLNSPRSC_7TC = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {

    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});
    }
};
