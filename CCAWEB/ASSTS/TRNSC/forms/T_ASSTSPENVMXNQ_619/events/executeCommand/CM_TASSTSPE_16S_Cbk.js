//Start signature to Callback event to CM_TASSTSPE_16S
task.executeCommandCallback.CM_TASSTSPE_16S = function (entities, executeCommandCallbackEventArgs) {
    if (executeCommandCallbackEventArgs.success) {
        Amortization.showTableAmortization("QV_EB77_IIB88", entities, executeCommandCallbackEventArgs);
        executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TASSTSPE_87R');
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false, null, timer);
    }
};
