
//Start signature to Callback event to CM_TASSTSGG_SSC
task.executeCommandCallback.CM_TASSTSGG_SSC = function(entities, executeCommandCallbackEventArgs) {
     if(executeCommandCallbackEventArgs.success){
          enableMyCommand(entities,executeCommandCallbackEventArgs.commons.api.viewState)
          executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAS_48950", false, null, timer);
     }
};
