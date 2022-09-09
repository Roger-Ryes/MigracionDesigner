
//Start signature to Callback event to VA_GRIDROWCOMMMNDD_641728
task.gridRowCommandCallback.VA_GRIDROWCOMMMNDD_641728 = function(entities, gridRowCommandCallbackEventArgs) {
    
    if(gridRowCommandCallbackEventArgs.success){
        gridRowCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_TRANSACII_82976", false, null, timer);
        gridRowCommandCallbackEventArgs.commons.api.grid.refresh('QV_PJ68_WJJ41');
    }

};
