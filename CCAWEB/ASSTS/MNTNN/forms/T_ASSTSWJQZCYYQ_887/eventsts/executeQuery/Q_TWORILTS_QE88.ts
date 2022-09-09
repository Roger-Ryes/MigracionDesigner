//TwoRangesListQuery Entity: TwoRangesList
task_executeQuery_Q_TWORILTS_QE88 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.idRango = this.dataRow.idRange;
    executeQueryEventArgs.parameters.fecha = executeQueryEventArgs.commons.api.vc.model.TwoRangesFilter.date;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.TwoRangesList = true;
};
