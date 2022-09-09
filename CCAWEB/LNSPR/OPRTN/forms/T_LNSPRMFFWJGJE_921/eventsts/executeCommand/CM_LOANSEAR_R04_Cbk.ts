
//Start signature to Callback event to CM_LOANSEAR_R04
task_executeCommandCallback_CM_LOANSEAR_R04 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
     if (executeCommandCallbackEventArgs.success) {
         executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_LOANSEAR_PN2');
     }
};
