


// (Button) 
task_executeCommand_CM_TLNSPRDN_B0D = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let datos: any = entities.LoanList;
    let contDatos: any = 0;

    for (let i: any = 0; i<datos.length; i++) {
        let dato: any = datos[i];

        if(dato.seleccion){
            contDatos++;
        }else{
            dato.seleccion = false;
        }
    }

    if(contDatos>0){
        let response: any = await firstValueFrom(
            executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTSEGUPD_56301")
        );

        switch (response.buttonIndex) {
                
                case 0: //cancel
                    
                    executeCommandEventArgs.commons.execServer = false;
                    break;
                case 1: //accept
                    executeCommandEventArgs.commons.execServer = true;
                    return true;
                    break;
            }
    }else{
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_SELECCISS_53496',         false,null,timer);
        executeCommandEventArgs.commons.execServer = false;
    }


    //executeCommandEventArgs.commons.serverParameters.entityName = true;
};