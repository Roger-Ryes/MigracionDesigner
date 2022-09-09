//Start signature to Callback event to Q_ONERIAAL_UR42
task.executeQueryCallback.Q_ONERIAAL_UR42 = function (entities, executeQueryCallbackEventArgs) {
    if (entities.OneRankList.data().length > 0) {
        
        for (var i = 0; i < entities.OneRankList.data().length; i++) {
            if (entities.OneRankList.data()[i].date.getDate() != new Date(cobis.containerScope.preferences.processDate).getDate()) {
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_SK42_AAN67', entities.OneRankList.data()[i], 'delete');
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_SK42_AAN67', entities.OneRankList.data()[i], 'edit');

            }
        }

    }
};
