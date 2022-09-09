//Start signature to Callback event to CM_TLNSPRZY_1_0
task_executeCommandCallback_CM_TLNSPRZY_1_0 = (
        entities: Model,
        executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
   
    if (executeCommandCallbackEventArgs.success) {
       /* if (entities.MassivePayments.length >= 2) {
                executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEN_20984", false, null, timer);

        } else {*/
                executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_TRANSACEC_84918', false, null, timer);
          
       // }

            executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRZY_RL6");
            executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRZY_N35");
            executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRZY_K05");
            executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRZY_1_0");
    }

};
