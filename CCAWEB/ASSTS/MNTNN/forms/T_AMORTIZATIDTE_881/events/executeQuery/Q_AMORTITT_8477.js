//AmortizationQuoteDetailQuery_8477 Entity: 
    task.executeQuery.Q_AMORTITT_8477 = function(executeQueryEventArgs){
    if (executeQueryEventArgs.commons.api.parentVc.parentVc &&
        executeQueryEventArgs.commons.api.parentVc.parentVc.id ==
        'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
         executeQueryEventArgs.commons.execServer = true;
        //executeQueryEventArgs.commons.serverParameters. = true;
    };