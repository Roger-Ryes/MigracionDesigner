
//PaymentAutomaticListQuery Entity: PaymentAutomaticList
task_executeQuery_Q_PAYMANAM_TY74 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let execServer: any = false;
    let nav: any = executeQueryEventArgs.commons.api.navigation;
    if(nav.getCustomDialogParameters()){
        executeQueryEventArgs.parameters.bankId = nav.getCustomDialogParameters().banco;
        executeQueryEventArgs.parameters.paymentMethod = nav.getCustomDialogParameters().paymentMethod;
        execServer = true;
    }
    executeQueryEventArgs.commons.execServer = execServer;
};