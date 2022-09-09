// (Button) 
task_executeCommand_CM_LOANSEAR_PN2 = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    // executeCommandEventArgs.commons.api.viewState.disableValidation('VA_ITEMUMGHQQCSAYX_466423');
    let datos: any = entities.ReadjustmenMList;

    let execServer: any = true;
    let contar: any = 0;

    for (let i: any = 0; i < datos.length; i++) {
        if (datos[i].seleccion) {
            contar++;
        }
    }

    if (contar == 0) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBESELRS_93935', false, null, timer);
        executeCommandEventArgs.commons.execServer = false;
        return;
    }

    let response: any = await firstValueFrom(
        executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTSEGUDT_45931")
    );

    switch (response.buttonIndex) {

            case 0: //cancel

                executeCommandEventArgs.commons.execServer = false;
                break;
            case 1:

                executeCommandEventArgs.commons.execServer = execServer;
                return true;
                break;
    }
};