
//StatusListQuery Entity: StatusList
task.executeQuery.Q_STATSTSS_LA52 = function(executeQueryEventArgs){

    executeQueryEventArgs.parameters.operacion = 'W';
    executeQueryEventArgs.commons.execServer = true;

    //executeQueryEventArgs.commons.serverParameters.StatusList = true;
};