
//OfficialQuery Entity: Official
task.executeQuery.Q_OFFILILC_KJ11 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.oficina = executeQueryEventArgs.parameters.officeCode;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Official = true;
};