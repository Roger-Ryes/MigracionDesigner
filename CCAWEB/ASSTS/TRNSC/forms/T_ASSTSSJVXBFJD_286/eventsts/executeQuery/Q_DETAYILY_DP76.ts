
//DetailNoAppliedPaymentQuery Entity: DetailNoAppliedPayment
task_executeQuery_Q_DETAYILY_DP76 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let commons: any = executeQueryEventArgs.commons;
    let api: any=executeQueryEventArgs.commons.api;
    let parameters: any=api.navigation.getCustomDialogParameters();

    executeQueryEventArgs.parameters.banco = parameters.bankId;
    executeQueryEventArgs.parameters.secuencial = parameters.secuencial;

    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.DetailNoAppliedPayment = true;
};