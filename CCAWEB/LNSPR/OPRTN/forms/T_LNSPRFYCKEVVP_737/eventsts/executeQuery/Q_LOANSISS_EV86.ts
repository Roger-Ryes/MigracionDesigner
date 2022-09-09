//LoansLinesListQuery Entity: LoansLinesList
task_executeQuery_Q_LOANSISS_EV86 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let api: any = executeQueryEventArgs.commons.api;

    if (!api.parentVc) {
        let loansLines: any = executeQueryEventArgs.commons.api.vc.model.LoansLines;
        executeQueryEventArgs.parameters.lineCod = loansLines.numLinea ? loansLines.numLinea : null;
        executeQueryEventArgs.parameters.loanCod = loansLines.numPrestamo ? loansLines.numPrestamo : null;
        executeQueryEventArgs.parameters.office = loansLines.oficina ? loansLines.oficina : null;
        executeQueryEventArgs.parameters.procedure = loansLines.numTramite ? loansLines.numTramite : null;
        if (isGroup) {
            executeQueryEventArgs.parameters.groupCod = loansLines.clientCode ? loansLines.clientCode : null;
        } else {
            executeQueryEventArgs.parameters.clientCod = loansLines.clientCode ? loansLines.clientCode : null;
        }
        executeQueryEventArgs.parameters.creationDate = loansLines.dateIni ? loansLines.dateIni : null;
        executeQueryEventArgs.parameters.expirationDate = loansLines.dateVto ? loansLines.dateVto : null;
        executeQueryEventArgs.parameters.coinCod = loansLines.moneda ? loansLines.moneda : null;
        executeQueryEventArgs.parameters.status = loansLines.estado ? loansLines.estado : null;
    } else {
        isGroup = api.navigation.getCustomDialogParameters().esGrupo;
        if(isGroup){
            executeQueryEventArgs.parameters.groupCod = api.navigation.getCustomDialogParameters().cliente;
        }else{
        executeQueryEventArgs.parameters.clientCod = api.navigation.getCustomDialogParameters().cliente;
    }
    
    }

    executeQueryEventArgs.parameters.sequencial = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_OS86_OQI18', ['sequential'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
        executeQueryEventArgs.parameters.sequencial = executeQueryEventArgs.parameters.sequential;
    
    }

    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LoansLinesList = true;
};
