
//GroupMembersLineListQuery Entity: GroupMembersLineList
task_executeQuery_Q_GROUEIRS_WN63 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
     executeQueryEventArgs.parameters.linea = executeQueryEventArgs.commons.api.vc.model.Members.sequential;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.GroupMembersLineList = true;
};