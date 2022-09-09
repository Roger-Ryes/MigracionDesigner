
//ProductLineListQuery Entity: ProductLineList
task.executeQuery.Q_PRODTSNI_WK98 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.nature = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().nature;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ProductLineList = true;
};