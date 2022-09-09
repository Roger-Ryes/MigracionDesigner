
//LoanGuaranteesSuretyQuery Entity: LoanGuaranteesSurety
task_executeQuery_Q_LOANTUNT_QF10 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;

    executeQueryEventArgs.parameters.pagGar = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_UH10_ODY37', ['guaranteesSurety'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
     executeQueryEventArgs.parameters.pagGar = executeQueryEventArgs.parameters.guaranteesSurety;
    }
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LoanGuaranteesSurety = true;
};