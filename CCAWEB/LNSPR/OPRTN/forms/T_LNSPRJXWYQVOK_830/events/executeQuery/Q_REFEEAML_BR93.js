//ReferentialItemsQuery Entity: ReferentialItems
task.executeQuery.Q_REFEEAML_BR93 = function (executeQueryEventArgs) {
    executeQueryEventArgs.commons.execServer = true;
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.parentVc.model.OperationEntity.operation;
    executeQueryEventArgs.commons.execServer = executeQueryEventArgs.parameters.banco ? true : false;
    //executeQueryEventArgs.commons.serverParameters.ReferentialItems = true;
};
