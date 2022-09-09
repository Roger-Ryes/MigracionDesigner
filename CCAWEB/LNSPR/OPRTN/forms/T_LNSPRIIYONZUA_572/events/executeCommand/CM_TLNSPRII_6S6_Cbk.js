
//Start signature to Callback event to CM_TLNSPRII_6S6
task.executeCommandCallback.CM_TLNSPRII_6S6 = function(entities, executeCommandCallbackEventArgs) {
    var viewState = executeCommandCallbackEventArgs.commons.api.viewState;
    var error = false;
    var detailList = entities.LoanSaleDetailList._data;
    var loanSaleList = entities.LoanSaleList._data;
    
    if(executeCommandCallbackEventArgs.success){
       viewState.disable('CM_TLNSPRII_6S6'); //boton guardar
        
       if(entities.LoanSaleDetailList && entities.LoanSaleDetailList.data()){
        for(let i=0; i< detailList.length;i++){
            var det = detailList[i];
           if('ERR' == det.state){
              error = true;
              break;
            }
      }
      }
        
      if(entities.LoanSaleList && entities.LoanSaleList.data()){
            if(loanSaleList[0].state != 'ING'){
               executeCommandCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList.data()[0], 'VA_GRIDROWCOMMMNAA_525584');
             }
      }
                
      if (error) {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEO_37894",false,null,timer);
      } else {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TRANSMION_38404",false,null,timer);
      }
    }
    
    
};
