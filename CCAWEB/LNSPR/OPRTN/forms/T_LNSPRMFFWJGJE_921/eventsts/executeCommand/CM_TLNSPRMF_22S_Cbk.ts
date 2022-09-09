//Start signature to Callback event to CM_TLNSPRMF_22S
task_executeCommandCallback_CM_TLNSPRMF_22S = (
 entities: Model,
 executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {

    if (executeCommandCallbackEventArgs.success) {
    executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRMF_JP1");
    executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRMF_22S");
    executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_22S');
    executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRMF_3SN");
    executeCommandCallbackEventArgs.commons.api.viewState.show("CM_TLNSPRMF_3SN");
    executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_TP8");
        executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_22S");

       /* if (entities.MassivePayments.length > 0) {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEO_37894",false,null,timer);
        } else {*/
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TRANSACEC_84918", false, null, timer);
       // }
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_BZ71_NGV26');
    }
};
