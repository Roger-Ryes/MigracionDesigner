//Start signature to Callback event to CM_TREFINAN_9NC
task.executeCommandCallback.CM_TREFINAN_9NC = function (entities, executeCommandCallbackEventArgs) {
    var viewState = executeCommandCallbackEventArgs.commons.api.viewState;
    if (executeCommandCallbackEventArgs.success) {
        viewState.disable('CM_TREFINAN_9NC', true)
        viewState.show("G_REFINANERL_686515");
        executeCommandCallbackEventArgs.commons.messageHandler.showTranslateMessagesSuccess("ASSTS.LBL_ASSTS_SALDOOTOR_36723", true);
    } else {
        //Se inhabilitan los botones
        viewState.enable('CM_TREFINAN_9NC', true)
        viewState.hide("G_REFINANERL_686515");

    }
    
    if (executeCommandCallbackEventArgs.commons.api.parentVc)
            executeCommandCallbackEventArgs.commons.api.parentVc.uploadGeneralEntities(entities);
};