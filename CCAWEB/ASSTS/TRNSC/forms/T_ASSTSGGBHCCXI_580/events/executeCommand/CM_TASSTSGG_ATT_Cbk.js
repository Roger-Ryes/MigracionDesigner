
//Start signature to Callback event to CM_TASSTSGG_ATT
task.executeCommandCallback.CM_TASSTSGG_ATT = function(entities, executeCommandCallbackEventArgs) {
    if(executeCommandCallbackEventArgs.success){
        clearForm(entities,1)
        enableMyCommand(entities,executeCommandCallbackEventArgs.commons.api.viewState)
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, timer);
    }
};
