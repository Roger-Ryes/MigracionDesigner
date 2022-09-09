
//LineGuaranteesAssociatedListQuery Entity: LineGuaranteesAssociatedList
task.executeQuery.Q_LINELAAN_WU84 = function(executeQueryEventArgs){
  executeQueryEventArgs.parameters.modo = 0;
    if (executeQueryEventArgs.config.appendRecords) {
        executeQueryEventArgs.parameters.modo = 1;
    }
    executeQueryEventArgs.parameters.tramite = executeQueryEventArgs.commons.api.vc.model.ValidationProcedure.procedure;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LineGuaranteesAssociatedList = true;
};