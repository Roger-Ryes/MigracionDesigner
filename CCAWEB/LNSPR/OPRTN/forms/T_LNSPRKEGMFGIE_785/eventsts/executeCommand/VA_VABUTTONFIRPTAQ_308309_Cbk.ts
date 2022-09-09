//Start signature to Callback event to VA_VABUTTONFIRPTAQ_308309
task_executeCommandCallback_VA_VABUTTONFIRPTAQ_308309 = (
     entities: Model,
     executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
     if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRVJ_776');
          executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACICA_42329', false, null, timer);
     }
};
