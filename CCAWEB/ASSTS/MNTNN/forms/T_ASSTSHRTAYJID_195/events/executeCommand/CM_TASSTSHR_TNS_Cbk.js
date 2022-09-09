//Start signature to Callback event to CM_TASSTSHR_TNS
task.executeCommandCallback.CM_TASSTSHR_TNS = function(entities, executeCommandCallbackEventArgs) {
    
    var viewState = executeCommandCallbackEventArgs.commons.api.viewState;
    
    if (executeCommandCallbackEventArgs.success) {
        viewState.disable('CM_TASSTSHR_TNS'); //Transmitir
     
     executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_LATRANSLO_19347", false,null,timer);
    }
};
