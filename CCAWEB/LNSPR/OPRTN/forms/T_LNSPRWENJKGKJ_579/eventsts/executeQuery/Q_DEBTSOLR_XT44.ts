
//DebtorListQuery Entity: DebtorList
task_executeQuery_Q_DEBTSOLR_XT44 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let nav: any = executeQueryEventArgs.commons.api.navigation;
    if( nav.getCustomDialogParameters() && nav.getCustomDialogParameters().bankId ){
        executeQueryEventArgs.parameters.bankId = nav.getCustomDialogParameters().bankId;
    }
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.DebtorList = true;
};