// (Button) 
task_executeCommand_CM_TLNSPRMF_TP8 = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let idAux: any = this.cobis.container.tabs.getCurrentTab().id;
    let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
    let nameAux: any = undefined;

    // executeCommandEventArgs.commons.execServer = true;
    let response: any = await firstValueFrom(
        executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_VAASALITS_91042")
    );

    switch (response.buttonIndex) {
            
            case 0: //cancel
                executeCommandEventArgs.commons.execServer = false;
                break;
            case 1: //accept
                executeCommandEventArgs.commons.execServer = true;

                if (this.cobis.container.tabs.getCurrentTab().text != undefined) {
                    nameAux = this.cobis.container.tabs.getCurrentTab().text;
                } else {
                    nameAux = this.cobis.translate("LNSPR.LBL_LNSPR_PAGOSMAOS_76833");
                }

                this.cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);
                return true;
                break;
        }
};