
//ListaFormaPagoQuery Entity: ListaFormaPago
task_executeQuery_Q_LISTOOGA_DP31 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.moneda = executeQueryEventArgs.commons.api.viewState.getDataItem("VA_PAYMETHODCURCYE_344515").code;
    executeQueryEventArgs.parameters.tipo = 1;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaFormaPago = true;
};