// (Button) 
task_executeCommand_CM_TLNSPRMF_22S = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = true;
    lote = entities.MassivePayments[0].lotePM;

    let response: any = await firstValueFrom(
        executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_SEPAGARAD_24782")
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
};