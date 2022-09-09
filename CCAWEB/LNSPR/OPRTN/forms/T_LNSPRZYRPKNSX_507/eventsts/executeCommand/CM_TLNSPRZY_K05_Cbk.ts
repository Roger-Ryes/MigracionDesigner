//Start signature to Callback event to CM_TLNSPRZY_K05
task_executeCommandCallback_CM_TLNSPRZY_K05 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    if (executeCommandCallbackEventArgs.success) {

        if (entities.ErrorMassivePayments.length >= 2) {
                executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASOD_51346", false, null, timer);
                executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_K05");
                executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_1_0");
                executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRZY_N35");
            } else {
            executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_TRANSMION_38404', false, null, timer);
                executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRZY_1_0");
                executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_K05");
                executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRZY_N35");
            }

            executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_DATEPQRPPIHOWWB_162199");
            executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_CURRENCYXLRJUPE_746199");
            executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_PAYMENTSTYPESSS_684199");
            executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_VALUEXDSHNMADTK_664199");
            executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_CUSTOMERMUPBSTT_916199");
            executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_REFERENCEUFYFMY_654199");
            executeCommandCallbackEventArgs.commons.api.viewState.disable("VA_NOTESGZRCIQVEYN_753199");
            executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_RL6");
    }

};
