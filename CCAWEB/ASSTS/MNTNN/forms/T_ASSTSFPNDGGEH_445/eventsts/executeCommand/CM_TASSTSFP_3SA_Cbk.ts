
//Start signature to Callback event to CM_TASSTSFP_3SA
task_executeCommandCallback_CM_TASSTSFP_3SA = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {

    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_FL15_OEC17');
    }
};
