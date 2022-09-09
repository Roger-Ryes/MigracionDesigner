
//Start signature to Callback event to CM_EXTENDSQ_O3T
task.executeCommandCallback.CM_EXTENDSQ_O3T = function(entities, executeCommandCallbackEventArgs) {
     if (executeCommandCallbackEventArgs.success) {
         executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false,null,timer);
     }
};
