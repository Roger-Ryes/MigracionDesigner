
//Start signature to Callback event to CM_TASSTSGG_SS5
task_executeCommandCallback_CM_TASSTSGG_SS5 = (
     entities: Model,
     executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
     if(executeCommandCallbackEventArgs.success){
          this.enableMyCommand(entities, executeCommandCallbackEventArgs.commons.api.viewState)
          executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_DESCUENAS_32493", false, null, this.ASSTS.timer);
     }
};
