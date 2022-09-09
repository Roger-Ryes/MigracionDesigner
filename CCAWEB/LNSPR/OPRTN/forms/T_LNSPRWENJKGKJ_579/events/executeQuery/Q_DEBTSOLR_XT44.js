
//DebtorListQuery Entity: DebtorList
task.executeQuery.Q_DEBTSOLR_XT44 = function(executeQueryEventArgs){
    var nav = executeQueryEventArgs.commons.api.navigation;
    if( nav.getCustomDialogParameters() && nav.getCustomDialogParameters().bankId ){
        executeQueryEventArgs.parameters.bankId = nav.getCustomDialogParameters().bankId;
    }
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.DebtorList = true;
};