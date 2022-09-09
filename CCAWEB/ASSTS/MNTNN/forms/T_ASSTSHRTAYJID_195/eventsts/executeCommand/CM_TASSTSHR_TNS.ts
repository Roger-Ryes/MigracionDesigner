// (Button) 
task_executeCommand_CM_TASSTSHR_TNS = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let parameters: any = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters();
    let msgConfirm: any = "ASSTS.MSG_ASSTS_VAAELIMEE_70525";
    let showMessage: any = true;

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
};