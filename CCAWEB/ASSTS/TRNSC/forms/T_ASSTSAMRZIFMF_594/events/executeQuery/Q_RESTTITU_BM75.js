//RestructuringListQuery Entity: RestructuringList
task.executeQuery.Q_RESTTITU_BM75 = function (executeQueryEventArgs) {
    executeQueryEventArgs.commons.api.viewState.disable('CM_TASSTSAM_SAA');
    onlyOne = 0;
    executeQueryEventArgs.parameters.ente = executeQueryEventArgs.commons.api.vc.model.RestructuringFilter.codClient;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.RestructuringList = true;
};
