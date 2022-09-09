// (Button) 
task_executeCommand_CM_TLNSPRSC_7TC = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    // Validación de porcentaje total
    let porcentajeTotal: any = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().gridPercentajeTotal;

    // let listBank= executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().validationAdministrator;

    if (entities.OperationEntity.selectedParticipants) {
        if ((porcentajeTotal + entities.OperationEntity.percentageParticipants) <= 100) {
            let response: any = await firstValueFrom(
                executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTASEGUE_94560")
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
        } else {
            executeCommandEventArgs.commons.execServer = false;
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_NOEXCEDER_58370", false, null, timer);
        }
    } else {
        executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_PARTICIIA_96996", false, null, timer);
    }
};
