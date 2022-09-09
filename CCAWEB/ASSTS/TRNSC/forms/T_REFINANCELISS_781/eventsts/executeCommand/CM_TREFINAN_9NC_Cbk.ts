//Start signature to Callback event to CM_TREFINAN_9NC
//designer-hint: 2304: Cannot find name 'task_executeCommandCallback_CM_TREFINAN_9NC'.
task_executeCommandCallback_CM_TREFINAN_9NC = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandCallbackEventArgs'.
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;
    if (executeCommandCallbackEventArgs.success) {
        viewState.disable('CM_TREFINAN_9NC', true)
        viewState.show("G_REFINANERL_686515");
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesSuccess("ASSTS.LBL_ASSTS_SALDOOTOR_36723", true);
    } else {
        //Se inhabilitan los botones
        viewState.enable('CM_TREFINAN_9NC', true)
        viewState.hide("G_REFINANERL_686515");

    }

    if (executeCommandCallbackEventArgs.commons.api.parentVc)
            executeCommandCallbackEventArgs.commons.api.parentVc?.uploadGeneralEntities(entities);
};