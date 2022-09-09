//OneRankListQuery Entity: OneRankList
task.executeQuery.Q_ONERIAAL_UR42 = function (executeQueryEventArgs) {
    executeQueryEventArgs.parameters.idRango = dataRow.idRange;
    executeQueryEventArgs.parameters.fecha = executeQueryEventArgs.commons.api.vc.model.OneRankFilter.date;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.OneRankList = true;
};
