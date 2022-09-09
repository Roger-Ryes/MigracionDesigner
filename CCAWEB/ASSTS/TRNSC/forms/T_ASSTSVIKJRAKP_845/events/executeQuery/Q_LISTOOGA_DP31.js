
//ListaFormaPagoQuery Entity: ListaFormaPago
task.executeQuery.Q_LISTOOGA_DP31 = function(executeQueryEventArgs){
     executeQueryEventArgs.parameters.tipoOperacion = "NEGOCIOS";
    executeQueryEventArgs.parameters.moneda = 0;
    executeQueryEventArgs.parameters.tipo = 2;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaFormaPago = true;
};