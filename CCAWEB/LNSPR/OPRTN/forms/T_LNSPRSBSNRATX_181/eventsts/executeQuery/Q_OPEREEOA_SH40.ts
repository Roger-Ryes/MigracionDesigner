
//OperationTypeLineListQuery Entity: OperationTypeLineList
task_executeQuery_Q_OPEREEOA_SH40 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let product: any = executeQueryEventArgs.commons.api.vc.model.ProductLineDistribution.product;

    if(product){
        executeQueryEventArgs.parameters.product = product;
        executeQueryEventArgs.commons.execServer = true; 
    }else{
       executeQueryEventArgs.commons.execServer = false;  
    }

    //executeQueryEventArgs.commons.serverParameters.OperationTypeLineList = true;
};