
//Start signature to Callback event to CM_TASSTSGG_SSC
task_executeCommandCallback_CM_TASSTSGG_SSC = (
     entities: Model,
     executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
     if(executeCommandCallbackEventArgs.success){
          this.enableMyCommand(entities, executeCommandCallbackEventArgs.commons.api.viewState)
          executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAS_48950", false, null, timer);
     }
};
