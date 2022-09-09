
//OfficialQuery Entity: Official
task_executeQuery_Q_OFFILILC_KJ11 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.oficina = executeQueryEventArgs.parameters.officeCode;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Official = true;
};