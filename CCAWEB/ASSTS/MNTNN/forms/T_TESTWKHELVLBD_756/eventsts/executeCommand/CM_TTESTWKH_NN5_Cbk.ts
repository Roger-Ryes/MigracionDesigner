//Start signature to Callback event to CM_TTESTWKH_NN5
    task_executeCommandCallback_CM_TTESTWKH_NN5 = (
        entities: Model,
        executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
    ) => {
        let api: any = executeCommandCallbackEventArgs.commons.api;
        let response: any = { };

        if (executeCommandCallbackEventArgs.success) {
            api.vc.closeModal(response);
            if (executeCommandCallbackEventArgs.commons.api.vc.mode == 2) {
                executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_SEDEBERZE_11967', false, null, timer);
            } else {
                executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_REGISTRAS_48950', false, null, timer);
            }
        }
    };