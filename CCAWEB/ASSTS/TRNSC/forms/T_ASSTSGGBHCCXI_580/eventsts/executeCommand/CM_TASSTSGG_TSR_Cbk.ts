
//Start signature to Callback event to CM_TASSTSGG_TSR
task_executeCommandCallback_CM_TASSTSGG_TSR = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    if(executeCommandCallbackEventArgs.success && entities.CompaniesBatch.fileError == 0){
        this.enableMyCommand(entities, executeCommandCallbackEventArgs.commons.api.viewState)
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11967", false, null, this.ASSTS.timer);
    }else{
        entities.CompaniesBatch.fileError = 0
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ERRORENAA_77685", false, null, this.ASSTS.timer);
    }
};