//LineDistributionMembersQuery Entity: LineDistributionMembers
task_executeQuery_Q_LINEIERT_DW35 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.numero = executeQueryEventArgs.commons.api.vc.model.ProductLineDistribution.sequential;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LineDistributionMembers = true;
};
