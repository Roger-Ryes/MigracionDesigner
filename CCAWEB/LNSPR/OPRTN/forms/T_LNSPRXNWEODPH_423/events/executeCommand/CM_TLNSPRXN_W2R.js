// (Button) 
task.executeCommand.CM_TLNSPRXN_W2R = function (entities, executeCommandEventArgs) {
    var entity = entities.OfficialOfficeTransferFilter;
    if (entities.OfficialOfficeTransferList.data().length > 0) {
        for (var i = 0; i <= entities.OfficialOfficeTransferList.data().length - 1; i++) {
            if (!entities.OfficialOfficeTransferList.data()[i].selected) {
                entities.OfficialOfficeTransferList.data()[i].selected = false;
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
