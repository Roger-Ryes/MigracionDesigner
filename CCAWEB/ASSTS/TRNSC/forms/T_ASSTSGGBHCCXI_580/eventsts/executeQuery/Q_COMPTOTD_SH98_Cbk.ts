
//Start signature to Callback event to Q_COMPTOTD_SH98
task_executeQueryCallback_Q_COMPTOTD_SH98 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
) => {
    if (entities.CompaniesDiscountsList != null && entities.CompaniesDiscountsList.length > 0) {
        executeQueryCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_DECUENTES_22154', false, null, this.ASSTS.timer)
        this.enableMyCommand(entities, executeQueryCallbackEventArgs.commons.api.viewState)
    }
};
