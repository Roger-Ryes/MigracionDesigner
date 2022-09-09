
//ProductLineDistributionListQuery Entity: ProductLineDistributionList
task_executeQuery_Q_PRODLUDT_UJ17 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.numero = executeQueryEventArgs.commons.api.vc.model.ProductLineDistribution.sequential;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ProductLineDistributionList = true;
};