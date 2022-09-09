//Start signature to Callback event to CM_TLNSPRXN_W2R
task.executeCommandCallback.CM_TLNSPRXN_W2R = function (entities, executeCommandCallbackEventArgs) {
    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACICA_42329', false, null, timer);
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_JQ56_BYK87');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');
    }
};
