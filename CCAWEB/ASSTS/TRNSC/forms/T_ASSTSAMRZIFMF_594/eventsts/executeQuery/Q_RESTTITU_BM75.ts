//RestructuringListQuery Entity: RestructuringList
//designer-hint: 2304: Cannot find name 'task_executeQuery_Q_RESTTITU_BM75'.
//designer-hint: 2304: Cannot find name 'CobisModelExecuteQueryEventArgs'.
task_executeQuery_Q_RESTTITU_BM75 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.api.viewState.disable('CM_TASSTSAM_SAA');
    onlyOne = 0;
    executeQueryEventArgs.parameters.ente = executeQueryEventArgs.commons.api.vc.model.RestructuringFilter.codClient;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.RestructuringList = true;
};
