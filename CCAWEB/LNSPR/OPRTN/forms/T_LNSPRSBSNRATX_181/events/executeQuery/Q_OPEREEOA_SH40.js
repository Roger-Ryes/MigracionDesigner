
//OperationTypeLineListQuery Entity: OperationTypeLineList
task.executeQuery.Q_OPEREEOA_SH40 = function(executeQueryEventArgs){
    var product = executeQueryEventArgs.commons.api.vc.model.ProductLineDistribution.product;
    
    if(product){
        executeQueryEventArgs.parameters.product = product;
        executeQueryEventArgs.commons.execServer = true; 
    }else{
       executeQueryEventArgs.commons.execServer = false;  
    }
     
    //executeQueryEventArgs.commons.serverParameters.OperationTypeLineList = true;
};