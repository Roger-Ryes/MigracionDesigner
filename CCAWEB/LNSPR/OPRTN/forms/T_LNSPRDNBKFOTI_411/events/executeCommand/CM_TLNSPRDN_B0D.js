


// (Button) 
task.executeCommand.CM_TLNSPRDN_B0D = function(entities, executeCommandEventArgs) {
      
    var datos = entities.LoanList._data;
    var contDatos = 0;
    
    for(let i = 0;i<datos.length;i++){
       let dato = datos[i];
        
        if(dato.seleccion){
            contDatos++;
        }else{
            dato.seleccion = false;
        }
    }
    
    if(contDatos>0){
        
        return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTSEGUPD_56301").then(
        function (response) {
            
            switch (response.buttonIndex) {
                
                case 0: //cancel
                    
                    executeCommandEventArgs.commons.execServer = false;
                    break;
                case 1: //accept
                    executeCommandEventArgs.commons.execServer = true;
                    return true;
                    break;
            }
        }
    );

    }else{
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_SELECCISS_53496',         false,null,timer);
        executeCommandEventArgs.commons.execServer = false;
    }
    
    
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};