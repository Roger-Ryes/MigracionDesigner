
//ListaFormaPagoQuery Entity: ListaFormaPago
task.executeQuery.Q_LISTOOGA_DP31 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.moneda = executeQueryEventArgs.commons.api.viewState.getDataItem("VA_PAYMETHODCURCYE_344515").code;
    executeQueryEventArgs.parameters.tipo = 1;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaFormaPago = true;
};