
//StatusListQueryMassive Entity: StatusList
task.executeQuery.Q_STATSTTL_MS41 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.operacion = 'E';
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.StatusList = true;
};