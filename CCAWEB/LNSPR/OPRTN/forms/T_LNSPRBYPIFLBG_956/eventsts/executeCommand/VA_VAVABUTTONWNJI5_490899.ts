// (Button) 
task_executeCommand_VA_VAVABUTTONWNJI5_490899 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {

    entities.OperationEntity.financialDestination = "7";
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters. = true;

};