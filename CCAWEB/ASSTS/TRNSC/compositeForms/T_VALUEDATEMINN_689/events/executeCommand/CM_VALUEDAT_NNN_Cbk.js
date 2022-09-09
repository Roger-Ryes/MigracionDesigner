//Start signature to Callback event to CM_VALUEDAT_NNN
task.executeCommandCallback.CM_VALUEDAT_NNN = function(entities, executeCommandCallbackEventArgs) {
     if(executeCommandCallbackEventArgs.success){
        entities.Loan.lastProcessDate = kendo.toString(kendo.parseDate(entities.Loan.lastProcessDate), JSON.parse(sessionStorage.dateFormat));
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_LATRANSLO_19347", false,null,timer);
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_1244_89323');

     }
};