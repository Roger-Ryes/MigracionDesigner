//Start signature to Callback event to CM_TASSTSSZ___7
    //designer-hint: 2304: Cannot find name 'task_executeCommandCallback_CM_TASSTSSZ___7'.
    task_executeCommandCallback_CM_TASSTSSZ___7 = (
        //designer-hint: 2304: Cannot find name 'Model'.
        //designer-hint: 6133: 'entities' is declared but its value is never read.
        entities: Model,
        //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandCallbackEventArgs'.
        executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
    ) => {
    if (executeCommandCallbackEventArgs.success) {
        //designer-hint: 2304: Cannot find name 'timer'.
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_CLCULOCOO_91053', false, null, this.ASSTS.timer);
    }
    };