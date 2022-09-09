
//DeferredItemsDetailListQuery Entity: DeferredItemsDetailList
task.executeQuery.Q_DEFEDLIT_ZB19 = function(executeQueryEventArgs){
    
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loanBankID;
    executeQueryEventArgs.parameters.dividend = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().dividend;

    executeQueryEventArgs.commons.execServer = true;

};