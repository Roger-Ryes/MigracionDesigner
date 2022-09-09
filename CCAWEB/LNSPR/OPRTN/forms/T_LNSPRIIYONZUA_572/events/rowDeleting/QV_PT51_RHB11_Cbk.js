
//Start signature to Callback event to QV_PT51_RHB11
task.gridRowDeletingCallback.QV_PT51_RHB11 = function(entities, gridRowDeletingCallbackEventArgs) {

     if(gridRowDeletingCallbackEventArgs.success){
          gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.LBL_LNSPR_ELIMINATR_48672",false,null,timer);
       }
};
