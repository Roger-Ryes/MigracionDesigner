
//Catalog3ItemsQuery Entity: Catalog3Items
task_executeQuery_Q_CATALGSE_LNSPR = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.value1 = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().codCliente;
    executeQueryEventArgs.parameters.producto = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().formaPago;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Catalog3Items = true;
};