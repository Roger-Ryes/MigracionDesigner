//TransactionLoanQuery Entity: 
task_executeQuery_Q_TRANSACO_1244 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.bank = executeQueryEventArgs.commons.api.vc.model.Loan.loanBankID;
    executeQueryEventArgs.parameters.option = executeQueryEventArgs.commons.api.vc.model.Loan.tipo;
    executeQueryEventArgs.parameters.sequential = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_1244_89323', ['secuential'], executeQueryEventArgs);

    if (executeQueryEventArgs.config?.appendRecords) {
        executeQueryEventArgs.parameters.sequential = executeQueryEventArgs.parameters.secuential;
    }

    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
};
