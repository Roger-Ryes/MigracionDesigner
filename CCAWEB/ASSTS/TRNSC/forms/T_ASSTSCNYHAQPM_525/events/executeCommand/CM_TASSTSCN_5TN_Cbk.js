//Start signature to Callback event to CM_TASSTSCN_5TN
task.executeCommandCallback.CM_TASSTSCN_5TN = function (entities, executeCommandCallbackEventArgs) {
    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false, null, timer);


        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TASSTSCN_5TN');
        openConfirmation = false;
    }
};
