


// (Button) 
task_executeCommand_CM_TASSTSEG_JJT = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    entities.OperationEntity.operation = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().operation;
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};