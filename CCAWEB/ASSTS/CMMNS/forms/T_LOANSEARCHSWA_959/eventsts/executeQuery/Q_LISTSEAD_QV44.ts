
//ListaEstadosQuery Entity: ListaEstados
task_executeQuery_Q_LISTSEAD_QV44 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.operacion = 'W';
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaEstados = true;
};