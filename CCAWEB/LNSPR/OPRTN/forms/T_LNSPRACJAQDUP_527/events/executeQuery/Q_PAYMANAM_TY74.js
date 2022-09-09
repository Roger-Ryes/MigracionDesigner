
//PaymentAutomaticListQuery Entity: PaymentAutomaticList
task.executeQuery.Q_PAYMANAM_TY74 = function(executeQueryEventArgs){
    var execServer = false;
    var nav = executeQueryEventArgs.commons.api.navigation;
    if(nav.getCustomDialogParameters()){
        executeQueryEventArgs.parameters.bankId = nav.getCustomDialogParameters().banco;
        executeQueryEventArgs.parameters.paymentMethod = nav.getCustomDialogParameters().paymentMethod;
        execServer = true;
    }
    executeQueryEventArgs.commons.execServer = execServer;
};