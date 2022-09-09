//AmortizationQuoteDetailQuery_8477 Entity: 
    task_executeQuery_Q_AMORTITT_8477 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    if (executeQueryEventArgs.commons.api.parentApi()?.parentVc && executeQueryEventArgs.commons.api.parentApi()?.parentVc?.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
         executeQueryEventArgs.commons.execServer = true;
        //executeQueryEventArgs.commons.serverParameters. = true;
    };