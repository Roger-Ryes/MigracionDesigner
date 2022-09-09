//SummaryStatusQuery Entity: SummaryStatus
task_executeQuery_Q_SUMMUSYU_GO80 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {

    executeQueryEventArgs.parameters.moneda = -1;
    executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().secuencial;
    executeQueryEventArgs.parameters.tOperacion = ' ';

    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_HQ80_NZX99', ['product', 'codMoney'], executeQueryEventArgs);

    if (executeQueryEventArgs.config?.appendRecords) {
        executeQueryEventArgs.parameters.moneda = executeQueryEventArgs.parameters.codMoney;
        executeQueryEventArgs.parameters.tOperacion = executeQueryEventArgs.parameters.product;

    }
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.SummaryStatus = true;
};