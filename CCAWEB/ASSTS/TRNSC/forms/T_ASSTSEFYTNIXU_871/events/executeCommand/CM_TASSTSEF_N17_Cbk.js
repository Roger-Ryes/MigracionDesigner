//Start signature to Callback event to CM_TASSTSEF_N17
task.executeCommandCallback.CM_TASSTSEF_N17 = function (entities, executeCommandCallbackEventArgs) {
    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false, null, timer);

        executeCommandCallbackEventArgs.commons.api.viewState.selectLayout("G_LOANPARSTB_361369", "G_LOANPARBTT_780369");


        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TASSTSEF_N17');
        executeCommandCallbackEventArgs.commons.api.viewState.hide('G_LOANPARNSB_185369');
        executeCommandCallbackEventArgs.commons.api.viewState.hide('G_LOANPARNET_643369');
        executeCommandCallbackEventArgs.commons.api.viewState.hide('G_LOANPARTDT_335369');


    }
};
