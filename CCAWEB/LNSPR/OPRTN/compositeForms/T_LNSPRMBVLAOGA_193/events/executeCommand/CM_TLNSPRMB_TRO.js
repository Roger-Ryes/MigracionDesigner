


// (Button) 
task.executeCommand.CM_TLNSPRMB_TRO = function(entities, executeCommandEventArgs) {
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