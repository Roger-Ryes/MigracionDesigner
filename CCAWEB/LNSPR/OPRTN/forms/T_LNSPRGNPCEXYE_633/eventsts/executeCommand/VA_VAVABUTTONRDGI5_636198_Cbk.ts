//Start signature to Callback event to VA_VAVABUTTONRDGI5_636198
task_executeCommandCallback_VA_VAVABUTTONRDGI5_636198 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    tmpGridAmortization = null;
    let grid: any = executeCommandCallbackEventArgs.commons.api.grid;
    executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRYT_R8O');
    if (executeCommandCallbackEventArgs.success) {
    
        executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRVJ_776');
        this.suprColAmortization(entities, executeCommandCallbackEventArgs, 'QV_ECPR_JAA30');
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_OPERACICA_42329", false, null, timer);
    }
};