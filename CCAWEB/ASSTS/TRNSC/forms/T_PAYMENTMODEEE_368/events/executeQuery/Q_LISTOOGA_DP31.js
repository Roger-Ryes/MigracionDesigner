
//ListaFormaPagoQuery Entity: ListaFormaPago
task.executeQuery.Q_LISTOOGA_DP31 = function(executeQueryEventArgs){
     executeQueryEventArgs.parameters.tipoOperacion = executeQueryEventArgs.commons.api.vc.model.Loan.operationTypeID;
    executeQueryEventArgs.parameters.moneda = executeQueryEventArgs.commons.api.viewState.getDataItem("VA_4212YIFTVBCOPPD_140216").code;
    executeQueryEventArgs.parameters.tipo = 1;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaFormaPago = true;
};