


// (Button) 
task.executeCommand.CM_TASSTSEG_JJT = function(entities, executeCommandEventArgs) {
    entities.OperationEntity.operation = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().operation;
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};