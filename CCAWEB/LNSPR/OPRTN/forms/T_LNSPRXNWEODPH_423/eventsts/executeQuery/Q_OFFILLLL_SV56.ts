//OfficalOfficeTransferListQuery Entity: OfficalOfficeTransferList
task_executeQuery_Q_OFFILLLL_SV56 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let entity: any = executeQueryEventArgs.commons.api.vc.model.OfficialOfficeTransferFilter;


    executeQueryEventArgs.parameters.grupal = entity.transferType;
    executeQueryEventArgs.parameters.categoria = 11;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_JQ56_BYK87', ['sequential'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
        executeQueryEventArgs.parameters.siguiente = executeQueryEventArgs.parameters.sequential;
    }

    if (!entity.originOffice || !entity.originOfficial) {
        executeQueryEventArgs.commons.execServer = false;
        executeQueryEventArgs.commons.api.viewState.focus('VA_ORIGINOFFICEUMK_654800');
        executeQueryEventArgs.commons.api.viewState.focus('VA_ORIGINOFFICILAA_229800');
        // executeQueryEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_INGRESEAI_45954', false, null, timer);
    } else {
        executeQueryEventArgs.parameters.oficina = entity.originOffice;
        executeQueryEventArgs.parameters.oficial = entity.originOfficial;
        executeQueryEventArgs.commons.execServer = true;
    }





    //executeQueryEventArgs.commons.serverParameters.OfficalOfficeTransferList = true;
};
