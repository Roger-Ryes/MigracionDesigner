//Start signature to Callback event to CM_TASSTSEG_JJT
task_executeCommandCallback_CM_TASSTSEG_JJT = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.api.navigation.closeModal({
            response: true
        });
    }
};
