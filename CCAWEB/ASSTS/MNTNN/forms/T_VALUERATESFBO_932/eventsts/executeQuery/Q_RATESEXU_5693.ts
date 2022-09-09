//RatesQuery_5693 Entity: 
task_executeQuery_Q_RATESEXU_5693 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    if (executeQueryEventArgs.commons.api.grid.getSelectedRows('QV_1722_99596')[0]) {
        executeQueryEventArgs.parameters.id = id;
        executeQueryEventArgs.parameters.clase = clase;
        executeQueryEventArgs.commons.execServer = true;
    } else {
        executeQueryEventArgs.commons.execServer = false;
    }

    //executeQueryEventArgs.commons.serverParameters. = true;
};
