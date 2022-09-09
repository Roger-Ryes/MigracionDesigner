
//ListaEstadosQuery Entity: ListaEstados
//designer-hint: 2304: Cannot find name 'task_executeQuery_Q_LISTSEAD_QV44'.
//designer-hint: 2304: Cannot find name 'CobisModelExecuteQueryEventArgs'.
task_executeQuery_Q_LISTSEAD_QV44 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.operacion = 'W';
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaEstados = true;
};