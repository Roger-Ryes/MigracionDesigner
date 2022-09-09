//TwoRangesListQuery Entity: TwoRangesList
task.executeQuery.Q_TWORILTS_QE88 = function (executeQueryEventArgs) {
    executeQueryEventArgs.parameters.idRango = dataRow.idRange;
    executeQueryEventArgs.parameters.fecha = executeQueryEventArgs.commons.api.vc.model.TwoRangesFilter.date;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.TwoRangesList = true;
};
