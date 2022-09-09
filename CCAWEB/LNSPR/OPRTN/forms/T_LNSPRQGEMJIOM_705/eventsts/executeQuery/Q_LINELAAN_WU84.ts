
//LineGuaranteesAssociatedListQuery Entity: LineGuaranteesAssociatedList
task_executeQuery_Q_LINELAAN_WU84 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
  executeQueryEventArgs.parameters.modo = 0;
    if (executeQueryEventArgs.config?.appendRecords) {
        executeQueryEventArgs.parameters.modo = 1;
    }
    executeQueryEventArgs.parameters.tramite = executeQueryEventArgs.commons.api.vc.model.ValidationProcedure.procedure;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LineGuaranteesAssociatedList = true;
};