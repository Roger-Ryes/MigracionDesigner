
//Start signature to Callback event to VA_VABUTTONZLYUQVN_789308
task_executeCommandCallback_VA_VABUTTONZLYUQVN_789308 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    if (executeCommandCallbackEventArgs.success) {
         executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACIOA_60671',false, null, timer);
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_ZZ84_YVC22');
    
    }
};
