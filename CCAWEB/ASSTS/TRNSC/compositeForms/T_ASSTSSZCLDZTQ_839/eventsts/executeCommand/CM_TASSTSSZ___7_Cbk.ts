//Start signature to Callback event to CM_TASSTSSZ___7
    task_executeCommandCallback_CM_TASSTSSZ___7 = (
        entities: Model,
        executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
    ) => {
    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_CLCULOCOO_91053', false, null, timer);
    }
    };