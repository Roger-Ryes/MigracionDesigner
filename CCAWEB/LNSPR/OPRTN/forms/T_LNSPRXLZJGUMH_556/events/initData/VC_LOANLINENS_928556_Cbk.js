//Start signature to Callback event to VC_LOANLINENS_928556
task.initDataCallback.VC_LOANLINENS_928556 = function(entities, initDataCallbackEventArgs) {
    if (initDataCallbackEventArgs.success) {
        calcular = true;
        initDataCallbackEventArgs.commons.api.parentVc.model.LoanLinesCreation = entities.LoanLinesCreation;
    
        if (entities.LoanLinesCreation.nature == 'P') {
            initDataCallbackEventArgs.commons.api.viewState.label("VA_CLIENTENOMBREEE_802412", "LNSPR.LBL_LNSPR_FONDEADOR_63367");
        } else {
            initDataCallbackEventArgs.commons.api.viewState.label("VA_CLIENTENOMBREEE_802412", "LNSPR.LBL_LNSPR_CLIENTEPO_59022");
        }

    }
};
