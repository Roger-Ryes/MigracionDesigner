//Start signature to Callback event to Q_TWORILTS_QE88
task.executeQueryCallback.Q_TWORILTS_QE88 = function (entities, executeQueryCallbackEventArgs) {
    if (entities.TwoRangesList.data().length > 0) {

        for (var i = 0; i < entities.TwoRangesList.data().length; i++) {
            if (entities.TwoRangesList.data()[i].date.getDate() != new Date(cobis.containerScope.preferences.processDate).getDate()) {
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_TJ88_MTX55', entities.TwoRangesList.data()[i], 'delete');
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_TJ88_MTX55', entities.TwoRangesList.data()[i], 'edit');

            }
        }

    }
};
