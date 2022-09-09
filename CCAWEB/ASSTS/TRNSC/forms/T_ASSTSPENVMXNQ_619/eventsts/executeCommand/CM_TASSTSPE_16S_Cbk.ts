//Start signature to Callback event to CM_TASSTSPE_16S
task_executeCommandCallback_CM_TASSTSPE_16S = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    if (executeCommandCallbackEventArgs.success) {
        this.ASSTS.Amortization.showTableAmortization("QV_EB77_IIB88", entities, executeCommandCallbackEventArgs);
        executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TASSTSPE_87R');
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false, null, this.ASSTS.timer);
    }
};
