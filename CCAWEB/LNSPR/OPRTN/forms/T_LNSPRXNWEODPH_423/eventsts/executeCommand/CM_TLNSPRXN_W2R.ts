// (Button) 
task_executeCommand_CM_TLNSPRXN_W2R = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let entity: any = entities.OfficialOfficeTransferFilter;
    if (entities.OfficialOfficeTransferList.length > 0) {
        for (let i: any = 0; i <= entities.OfficialOfficeTransferList.length - 1; i++) {
            if (!entities.OfficialOfficeTransferList[i].selected) {
                entities.OfficialOfficeTransferList[i].selected = false;
            }

        }
    }

    if (!entity.destinationOffice || !entity.destinationOfficial || !entity.reason) {
        // executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OFICINAQO_65724', false, null, timer);
        executeCommandEventArgs.commons.api.viewState.focus('VA_DESTINATIONOEEF_643800');
        executeCommandEventArgs.commons.api.viewState.focus('VA_DESTINATIONOIAI_845800');
        executeCommandEventArgs.commons.api.viewState.focus('VA_REASONDDWAKVIHS_847800');
        executeCommandEventArgs.commons.execServer = false;
    } else {
        executeCommandEventArgs.commons.execServer = true;
    }


    //executeCommandEventArgs.commons.serverParameters.entityName = true;
};
