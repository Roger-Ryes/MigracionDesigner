
//Start signature to Callback event to CM_TASSTSGG_SS5
task.executeCommandCallback.CM_TASSTSGG_SS5 = function(entities, executeCommandCallbackEventArgs) {
     if(executeCommandCallbackEventArgs.success){
          enableMyCommand(entities,executeCommandCallbackEventArgs.commons.api.viewState)
          executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_DESCUENAS_32493", false, null, timer);
     }
};
