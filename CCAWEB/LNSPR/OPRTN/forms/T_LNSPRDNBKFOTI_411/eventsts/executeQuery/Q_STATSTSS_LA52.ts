
//StatusListQuery Entity: StatusList
task_executeQuery_Q_STATSTSS_LA52 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {

    executeQueryEventArgs.parameters.operacion = 'W';
    executeQueryEventArgs.commons.execServer = true;

    //executeQueryEventArgs.commons.serverParameters.StatusList = true;
};