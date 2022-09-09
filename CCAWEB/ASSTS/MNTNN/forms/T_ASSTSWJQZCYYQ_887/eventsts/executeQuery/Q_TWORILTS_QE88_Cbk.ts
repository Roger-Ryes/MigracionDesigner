//Start signature to Callback event to Q_TWORILTS_QE88
task_executeQueryCallback_Q_TWORILTS_QE88 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
) => {
    if (entities.TwoRangesList.length > 0) {

        for (let i: any = 0; i < entities.TwoRangesList.length; i++) {
            if (entities.TwoRangesList[i].date.getDate() != new Date(this.cobis.containerScope.preferences.processDate).getDate()) {
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_TJ88_MTX55', entities.TwoRangesList[i], 'delete');
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_TJ88_MTX55', entities.TwoRangesList[i], 'edit');

            }
        }

    }
};
