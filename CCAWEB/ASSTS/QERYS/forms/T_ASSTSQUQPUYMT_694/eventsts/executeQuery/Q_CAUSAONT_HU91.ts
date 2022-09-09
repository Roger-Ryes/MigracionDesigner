//CausationQuery Entity: Causation
task_executeQuery_Q_CAUSAONT_HU91 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let listCausation: any = executeQueryEventArgs.commons.api.vc.model.Causation;

    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc?.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.parentVc?.model.Loan.loanBankID;
    executeQueryEventArgs.parameters.secuencial = 0;

    if (executeQueryEventArgs.config?.appendRecords && listCausation) {
        executeQueryEventArgs.parameters.secuencial = listCausation.data().length;;
    }
    executeQueryEventArgs.commons.execServer = true;
};