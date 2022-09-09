// (Button) 
task.executeCommand.CM_TASSTSBI_BA1 = function (entities, executeCommandEventArgs) {
    var apiHeader = executeCommandEventArgs.commons.api.cobisPatterns.header;
    apiHeader.refreshActions(executeCommandEventArgs);
    
    executeCommandEventArgs.commons.execServer = true;

};
