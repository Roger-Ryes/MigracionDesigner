
//DetailNoAppliedPaymentQuery Entity: DetailNoAppliedPayment
task.executeQuery.Q_DETAYILY_DP76 = function(executeQueryEventArgs){
    
    var commons = executeQueryEventArgs.commons;
    var api=executeQueryEventArgs.commons.api;
    var parameters=api.navigation.getCustomDialogParameters();	
    
    executeQueryEventArgs.parameters.banco = parameters.bankId;
    executeQueryEventArgs.parameters.secuencial = parameters.secuencial;
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.DetailNoAppliedPayment = true;
};