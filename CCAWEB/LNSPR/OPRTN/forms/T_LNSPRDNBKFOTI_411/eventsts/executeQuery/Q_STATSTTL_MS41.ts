
//StatusListQueryMassive Entity: StatusList
task_executeQuery_Q_STATSTTL_MS41 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.operacion = 'E';
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.StatusList = true;
};