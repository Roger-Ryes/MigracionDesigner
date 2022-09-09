//SummaryMembersQuery Entity: SummaryMembers
task_executeQuery_Q_SUMMESYE_DM68 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.moneda = -1;
    executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().secuencial;
    executeQueryEventArgs.parameters.cliente = 0;

    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_HR68_RLL81', ['codMember', 'codMoney'], executeQueryEventArgs);

    if (executeQueryEventArgs.config?.appendRecords) {
        executeQueryEventArgs.parameters.moneda = executeQueryEventArgs.parameters.codMoney;
        executeQueryEventArgs.parameters.cliente = executeQueryEventArgs.parameters.codMember;

    }
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.SummaryMembers = true;
};
