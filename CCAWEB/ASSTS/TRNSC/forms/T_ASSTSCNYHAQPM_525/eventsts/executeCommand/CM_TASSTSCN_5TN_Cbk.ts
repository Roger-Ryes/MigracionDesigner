//Start signature to Callback event to CM_TASSTSCN_5TN
task_executeCommandCallback_CM_TASSTSCN_5TN = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false, null, timer);


        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TASSTSCN_5TN');
        openConfirmation = false;
    }
};
