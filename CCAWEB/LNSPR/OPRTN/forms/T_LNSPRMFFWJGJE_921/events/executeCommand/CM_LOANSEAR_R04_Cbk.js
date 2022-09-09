
//Start signature to Callback event to CM_LOANSEAR_R04
task.executeCommandCallback.CM_LOANSEAR_R04 = function(entities, executeCommandCallbackEventArgs) {
     if (executeCommandCallbackEventArgs.success) {
         executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_LOANSEAR_PN2');
     }
};
