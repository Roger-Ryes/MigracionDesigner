
//Start signature to Callback event to VA_GRIDROWCOMMMNAA_525584
task_gridRowCommandCallback_VA_GRIDROWCOMMMNAA_525584 = (
    entities: Model,
    gridRowCommandCallbackEventArgs: CobisModelGridRowCommandCallbackEventArgs
) => {
    if(gridRowCommandCallbackEventArgs.success){
        gridRowCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TRANSACEC_84918", false, null, timer);
        if(!uploadedFile){
           gridRowCommandCallbackEventArgs.commons.api.grid.refresh('QV_PT51_RHB11');
           }else{
               gridRowCommandCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList[0], 'VA_GRIDROWCOMMMNAA_525584');
           }
       }
};
