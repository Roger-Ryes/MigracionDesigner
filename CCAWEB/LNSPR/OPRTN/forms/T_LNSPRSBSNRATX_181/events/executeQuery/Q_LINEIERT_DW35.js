//LineDistributionMembersQuery Entity: LineDistributionMembers
task.executeQuery.Q_LINEIERT_DW35 = function (executeQueryEventArgs) {
    executeQueryEventArgs.parameters.numero = executeQueryEventArgs.commons.api.vc.model.ProductLineDistribution.sequential;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LineDistributionMembers = true;
};
