//MemberDetailQuery Entity: MemberDetail
task_executeQuery_Q_MEMBIAAA_BE92 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.vc.model.Members.codLine;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.MemberDetail = true;
};