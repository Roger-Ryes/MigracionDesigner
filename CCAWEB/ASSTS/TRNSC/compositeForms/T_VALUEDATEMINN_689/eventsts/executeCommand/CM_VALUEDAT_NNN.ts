// (Button) 
    task_executeCommand_CM_VALUEDAT_NNN = async (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        let parameters: any = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters();
        let msgConfirm: any = "";
        let showMessage: any = true;
        if (parameters.parameters.idMenu == 'FECHA') {
                msgConfirm = "ASSTS.MSG_ASSTS_ESTSEGURO_95544";
        } else if (parameters.parameters.idMenu == 'REVERSOS') {
            msgConfirm = "ASSTS.MSG_ASSTS_ESTSEGURV_19605";
            let selectedRow: any = executeCommandEventArgs.commons.api.grid.getSelectedRows('QV_1244_89323');
            if (selectedRow.length == 0){
executeCommandEventArgs.commons.messageHandler.showMessagesInformation(
"ASSTS.MSG_ASSTS_SELECCINT_52125", false, null, this.ASSTS.timer);
showMessage = false;
}
        }
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
                        //COMPARE VALUE DATE  WITH LAST PROCESS DATE
                        if (this.queryDict.menu == this.ASSTS.Constants.MENU_VALUE_DATE){
                            let dateParts: any = entities.Loan.lastProcessDate?.split("/");
                            let d: any = dateParts[1] + '/' + dateParts[0] + '/' + dateParts[2];
                            let dateLP: any = new Date(d);
                            if (entities.ValueDateFilter.valueDate! > dateLP){
                                return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_LAFECHADP_53060").then((respAux: any) => {
                                    switch(respAux.buttonIndex){
                                case 0:
                                    executeCommandEventArgs.commons.execServer = false;
                                                 break;
                                case 1:
                                    executeCommandEventArgs.commons.execServer = true;
                                                 response = true;
                                                 break;
                                    }
                                    return response;
                                });
                            }else{
                                executeCommandEventArgs.commons.execServer = true;
                                response = true;
                            }
                        }else{
                            executeCommandEventArgs.commons.execServer = true;
                            response = true;
                        }
                        break;
            }
            return response;
        }
    };