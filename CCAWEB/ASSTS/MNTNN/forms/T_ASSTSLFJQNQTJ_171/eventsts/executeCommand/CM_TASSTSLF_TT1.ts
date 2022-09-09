// (Button) 
task_executeCommand_CM_TASSTSLF_TT1 = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    let parameters: any = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters();
    let msgConfirm: any = "ASSTS.MSG_ASSTS_VAAREALME_44698";
    let showMessage: any = true;
    let diaActual: any = entities.ChangePayDayEntity.currentPayDay;
    let diaNuevo: any  = entities.ChangePayDayEntity.newPayDay;
    let motivo: any    = entities.ChangePayDayEntity.reason;

    if (motivo != undefined){
        if(diaActual == diaNuevo){
         executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_DADEPAGSE_14590', false, null, timer);
     
    }else{

           if (showMessage){
               let resp: any = await firstValueFrom(
                   executeCommandEventArgs.commons.messageHandler.showMessagesConfirm(msgConfirm)
               );

               let response: any = false;
               switch(resp.buttonIndex){
                   case 0 : //CANCEL
                           executeCommandEventArgs.commons.execServer = false;
                           break;
                   case 1 : //ACCEPT
                            executeCommandEventArgs.commons.execServer = true;
                            response = true;
                           
                           break;
               }
               return response;
           }
      } 
  }else {
     executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELMOTIVEE_44777', false, null, timer); 
  }
};