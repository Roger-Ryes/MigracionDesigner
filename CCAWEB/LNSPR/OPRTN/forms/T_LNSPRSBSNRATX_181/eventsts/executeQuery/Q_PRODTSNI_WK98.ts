
//ProductLineListQuery Entity: ProductLineList
task_executeQuery_Q_PRODTSNI_WK98 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.nature = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().nature;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ProductLineList = true;
};