// (Button) 
task_executeCommand_CM_TLNSPRMF_9NN = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let response: any = await firstValueFrom(
        executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTASEGSR_43909")
    );




    //executeCommandEventArgs.commons.serverParameters.entityName = true;

    switch (response.buttonIndex) {
            
            case 0: //cancel
                
                executeCommandEventArgs.commons.execServer = false;
                break;
            case 1: //accept
                executeCommandEventArgs.commons.api.viewState.show('CM_TLNSPRMF_NMS');
                executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
                executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N');

                executeCommandEventArgs.commons.execServer = true;
                return true;
                break;
        }
};
