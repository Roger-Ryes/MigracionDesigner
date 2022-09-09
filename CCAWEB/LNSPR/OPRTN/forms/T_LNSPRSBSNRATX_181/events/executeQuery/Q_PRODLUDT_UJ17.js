
//ProductLineDistributionListQuery Entity: ProductLineDistributionList
task.executeQuery.Q_PRODLUDT_UJ17 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.numero = executeQueryEventArgs.commons.api.vc.model.ProductLineDistribution.sequential;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ProductLineDistributionList = true;
};