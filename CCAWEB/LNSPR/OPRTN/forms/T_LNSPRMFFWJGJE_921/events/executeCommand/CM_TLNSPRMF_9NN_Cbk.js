
//Start signature to Callback event to CM_TLNSPRMF_9NN
task.executeCommandCallback.CM_TLNSPRMF_9NN = function(entities, executeCommandCallbackEventArgs) {
   
    var datos = entities.MassiveCommissions._data;
    var contador = 0;
    
    for(let i = 0; i<datos.length; i++){
        let dato = datos[i];
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
