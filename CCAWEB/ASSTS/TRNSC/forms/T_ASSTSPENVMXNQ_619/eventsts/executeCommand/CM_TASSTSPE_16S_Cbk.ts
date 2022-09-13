//Start signature to Callback event to CM_TASSTSPE_16S
//designer-hint: 2304: Cannot find name 'task_executeCommandCallback_CM_TASSTSPE_16S'.
task_executeCommandCallback_CM_TASSTSPE_16S = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandCallbackEventArgs'.
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    if (executeCommandCallbackEventArgs.success) {
        //designer-hint: 2304: Cannot find name 'Amortization'.
        this.ASSTS.Amortization.showTableAmortization("QV_EB77_IIB88", entities, executeCommandCallbackEventArgs);
        executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TASSTSPE_87R');
        //designer-hint: 2304: Cannot find name 'timer'.
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false, null, this.ASSTS.timer);
    }
};
