
//Start signature to Callback event to CM_TLNSPRDN_B0D
task.executeCommandCallback.CM_TLNSPRDN_B0D = function(entities, executeCommandCallbackEventArgs) {

    if(executeCommandCallbackEventArgs.success){
        
        var loans = entities.LoanList._data;
        var contError = 0;
        
        for(let i=0;i<loans.length;i++){
            if(loans[i].descriptionMistake){
            contError++;
            }
        }
    
        if(contError==0){
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACIOA_60671',   false,null,timer);
    }
    
    }else{
    executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_VABUTTONUSCBRTC_509293');
    executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_ARCHIVOEWNXRMQG_617293');
    }

};
