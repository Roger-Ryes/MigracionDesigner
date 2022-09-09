


// (Button) 
task_executeCommand_CM_TLNSPRMB_TRO = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    if (entities.OperationEntity.visibleInternalRateOfReturn && entities.OperationEntity.updatedInternalRateOfReturn) {
        executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.cancel = true;
        return;
    }

    if (entities.OperationEntity.checkirrtypeoperationvalue) {
        return false;
    }
    executeCommandEventArgs.commons.execServer = true;
    executeCommandEventArgs.commons.serverParameters.OperationEntity = true;
};