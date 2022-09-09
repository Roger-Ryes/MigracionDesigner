
//Start signature to Callback event to Q_COMPTOTD_SH98
task.executeQueryCallback.Q_COMPTOTD_SH98 = function(entities, executeQueryCallbackEventArgs) {
    if (entities.CompaniesDiscountsList != null && entities.CompaniesDiscountsList.data().length > 0) {
        executeQueryCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_DECUENTES_22154', false, null, timer)
        enableMyCommand(entities,executeQueryCallbackEventArgs.commons.api.viewState)
    }
};
