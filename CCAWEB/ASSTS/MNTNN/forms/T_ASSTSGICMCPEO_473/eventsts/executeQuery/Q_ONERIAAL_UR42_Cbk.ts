//Start signature to Callback event to Q_ONERIAAL_UR42
task_executeQueryCallback_Q_ONERIAAL_UR42 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
) => {
    if (entities.OneRankList.length > 0) {
        
        for (let i: any = 0; i < entities.OneRankList.length; i++) {
            if (entities.OneRankList[i].date.getDate() != new Date(this.cobis.containerScope.preferences.processDate).getDate()) {
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_SK42_AAN67', entities.OneRankList[i], 'delete');
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_SK42_AAN67', entities.OneRankList[i], 'edit');

            }
        }

    }
};
