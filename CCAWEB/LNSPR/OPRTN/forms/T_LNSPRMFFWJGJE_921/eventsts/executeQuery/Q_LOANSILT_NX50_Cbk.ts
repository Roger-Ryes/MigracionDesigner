//Start signature to Callback event to Q_LOANSILT_NX50
    task_executeQueryCallback_Q_LOANSILT_NX50 = (
        entities: Model,
        executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
    ) => {
        if (entities.LoanList.length > 0) {
            if (LNSPR.getQueryStrings().type === 'I') {
                executeQueryCallbackEventArgs.commons.api.grid.showToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_197');
            } else if (LNSPR.getQueryStrings().type === 'P') {
                executeQueryCallbackEventArgs.commons.api.grid.showToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_388');
                executeQueryCallbackEventArgs.commons.api.viewState.disable('VA_ARCHIVOJFAGWZSQ_219423');
                
            } else if (LNSPR.getQueryStrings().type === 'C') {
                executeQueryCallbackEventArgs.commons.api.grid.showToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_351');
            }
        }
    };