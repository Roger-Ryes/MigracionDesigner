
//Start signature to Callback event to CM_TASSTSGG_TSR
task.executeCommandCallback.CM_TASSTSGG_TSR = function(entities, executeCommandCallbackEventArgs) {
    if(executeCommandCallbackEventArgs.success && entities.CompaniesBatch.fileError == 0){
        enableMyCommand(entities,executeCommandCallbackEventArgs.commons.api.viewState)
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11967", false, null, timer);
    }else{
        entities.CompaniesBatch.fileError = 0
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ERRORENAA_77685", false, null, timer);
    }
};