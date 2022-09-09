//LineGuaranteesListQuery Entity: LineGuaranteesList
task.executeQuery.Q_LINERLAR_KA20 = function (executeQueryEventArgs) {
    executeQueryEventArgs.parameters.modo = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_KB20_UZG21', ['guarantee'], executeQueryEventArgs);
    if (executeQueryEventArgs.config.appendRecords) {
        executeQueryEventArgs.parameters.modo = 1;
        executeQueryEventArgs.parameters.custodia = executeQueryEventArgs.parameters.guarantee;
    }
    executeQueryEventArgs.parameters.tipo = executeQueryEventArgs.commons.api.vc.model.LoansLineGuarantee.guaranteeTypeCode;
    executeQueryEventArgs.parameters.cliente = executeQueryEventArgs.commons.api.vc.model.LoansLineGuarantee.clientCode;
    executeQueryEventArgs.parameters.estado = executeQueryEventArgs.commons.api.vc.model.LoansLineGuarantee.guaranteeStatus;
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LineGuaranteesList = true;
};
