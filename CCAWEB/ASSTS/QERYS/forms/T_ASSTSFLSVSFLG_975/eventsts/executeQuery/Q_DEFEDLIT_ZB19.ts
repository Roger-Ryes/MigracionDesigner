
//DeferredItemsDetailListQuery Entity: DeferredItemsDetailList
task_executeQuery_Q_DEFEDLIT_ZB19 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loanBankID;
    executeQueryEventArgs.parameters.dividend = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().dividend;

    executeQueryEventArgs.commons.execServer = true;

};