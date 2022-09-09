//ReferentialItemsQuery Entity: ReferentialItems
task_executeQuery_Q_REFEEAML_BR93 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.parentVc?.model.OperationEntity.operation;
    executeQueryEventArgs.commons.execServer = executeQueryEventArgs.parameters.banco ? true : false;
    //executeQueryEventArgs.commons.serverParameters.ReferentialItems = true;
};
