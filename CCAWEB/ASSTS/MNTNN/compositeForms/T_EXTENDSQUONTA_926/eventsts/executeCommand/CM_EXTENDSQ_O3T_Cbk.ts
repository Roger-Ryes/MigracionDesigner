
//Start signature to Callback event to CM_EXTENDSQ_O3T
task_executeCommandCallback_CM_EXTENDSQ_O3T = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
     if (executeCommandCallbackEventArgs.success) {
         executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false,null,timer);
     }
};
