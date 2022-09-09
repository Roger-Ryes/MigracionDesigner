
//ListaFormaPagoQuery Entity: ListaFormaPago
task_executeQuery_Q_LISTOOGA_DP31 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
     executeQueryEventArgs.parameters.tipoOperacion = "NEGOCIOS";
    executeQueryEventArgs.parameters.moneda = 0;
    executeQueryEventArgs.parameters.tipo = 2;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaFormaPago = true;
};