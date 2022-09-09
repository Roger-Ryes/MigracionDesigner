//OneRankListQuery Entity: OneRankList
task_executeQuery_Q_ONERIAAL_UR42 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.idRango = this.dataRow.idRange;
    executeQueryEventArgs.parameters.fecha = executeQueryEventArgs.commons.api.vc.model.OneRankFilter.date;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.OneRankList = true;
};
