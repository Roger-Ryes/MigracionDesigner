//MemberDetailQuery Entity: MemberDetail
task.executeQuery.Q_MEMBIAAA_BE92 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.vc.model.Members.codLine;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.MemberDetail = true;
};