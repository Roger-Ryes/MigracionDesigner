
//Start signature to Callback event to CM_TASSTSGG_ATT
task_executeCommandCallback_CM_TASSTSGG_ATT = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    if(executeCommandCallbackEventArgs.success){
        this.clearForm(entities, 1)
        this.enableMyCommand(entities, executeCommandCallbackEventArgs.commons.api.viewState)
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, this.ASSTS.timer);
    }
};
