
//Start signature to Callback event to QV_PT51_RHB11
task_gridRowDeletingCallback_QV_PT51_RHB11 = (
     entities: Model,
     gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {

     if(gridRowDeletingCallbackEventArgs.success){
          gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.LBL_LNSPR_ELIMINATR_48672",false,null,timer);
       }
};
