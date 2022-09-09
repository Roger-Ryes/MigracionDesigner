
//Start signature to Callback event to CM_TLNSPRMF_9NN
task_executeCommandCallback_CM_TLNSPRMF_9NN = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    let datos: any = entities.MassiveCommissions;
    let contador: any = 0;

    for (let i: any = 0; i<datos.length; i++) {
        let dato: any = datos[i];
        if(dato.mistake){
            contador++;      
        }
    }

    if(contador > 0){
       executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEN_20984", false, null, timer);
        
    }else{
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_TRANSACEC_84918', false,null,timer);
        
    }
};
