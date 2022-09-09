//Start signature to Callback event to CM_TASSTSSZ___7
    task.executeCommandCallback.CM_TASSTSSZ___7 = function(entities, executeCommandCallbackEventArgs) {
    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_CLCULOCOO_91053', false, null, timer);
    }
    };