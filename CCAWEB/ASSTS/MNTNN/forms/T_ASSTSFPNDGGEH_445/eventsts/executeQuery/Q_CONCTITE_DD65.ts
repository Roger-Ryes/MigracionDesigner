//ConceptItemsQuery Entity: ConceptItems
task_executeQuery_Q_CONCTITE_DD65 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let loans: any = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan;
    executeQueryEventArgs.parameters.banco = loans.loanBankID;
    executeQueryEventArgs.parameters.operacion = 'Q';
    executeQueryEventArgs.parameters.tOperacion = loans.operationTypeID;
    executeQueryEventArgs.parameters.moneda = loans.codCurrency;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ConceptItems = true;
};
