//Start signature to Callback event to Q_LOANSILT_NX50
    task.executeQueryCallback.Q_LOANSILT_NX50 = function(entities, executeQueryCallbackEventArgs) {
        if (entities.LoanList.data().length > 0) {
            if (getQueryStrings().type === 'I') {
                executeQueryCallbackEventArgs.commons.api.grid.showToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_197');
            } else if (getQueryStrings().type === 'P') {
                executeQueryCallbackEventArgs.commons.api.grid.showToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_388');
                executeQueryCallbackEventArgs.commons.api.viewState.disable('VA_ARCHIVOJFAGWZSQ_219423');
                
            } else if (getQueryStrings().type === 'C') {
                executeQueryCallbackEventArgs.commons.api.grid.showToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_351');
            }
        }
    };