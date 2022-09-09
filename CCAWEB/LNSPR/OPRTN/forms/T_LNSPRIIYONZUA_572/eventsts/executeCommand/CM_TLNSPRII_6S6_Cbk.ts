
//Start signature to Callback event to CM_TLNSPRII_6S6
task_executeCommandCallback_CM_TLNSPRII_6S6 = (
  entities: Model,
  executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
  let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;
  let error: any = false;
  let detailList: any = entities.LoanSaleDetailList;
  let loanSaleList: any = entities.LoanSaleList;

  if(executeCommandCallbackEventArgs.success){
     viewState.disable('CM_TLNSPRII_6S6'); //boton guardar
      
     if(entities.LoanSaleDetailList && entities.LoanSaleDetailList){
      for (let i: any=0; i< detailList.length; i++) {
        let det: any = detailList[i];
        if('ERR' == det.state){
           error = true;
           break;
         }
      }
    }
      
    if(entities.LoanSaleList && entities.LoanSaleList){
          if(loanSaleList[0].state != 'ING'){
             executeCommandCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList[0], 'VA_GRIDROWCOMMMNAA_525584');
           }
    }
              
    if (error) {
    executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEO_37894",false,null,timer);
    } else {
    executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TRANSMION_38404",false,null,timer);
    }
  }
};
