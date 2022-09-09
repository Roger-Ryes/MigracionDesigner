//Start signature to Callback event to VA_ARCHIVOJFAGWZSQ_219423
task_executeCommandCallback_VA_ARCHIVOJFAGWZSQ_219423 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {

    if(executeCommandCallbackEventArgs.success){        
        
        if (LNSPR.getQueryStrings().type == 'I') {
            executeCommandCallbackEventArgs.commons.api.viewState.show('G_LOANSEARCR_617423');
            executeCommandCallbackEventArgs.commons.api.viewState.hide('G_LOANSEAHHC_140423');
            executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_LOANSEAR_PN2');
            executeCommandCallbackEventArgs.commons.api.viewState.hide('CM_LOANSEAR_R04');
            executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_9NN');
            executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_NMS');

        } else if (LNSPR.getQueryStrings().type == 'P') {
             executeCommandCallbackEventArgs.commons.api.viewState.show('G_LOANSEAHHC_356423');
            executeCommandCallbackEventArgs.commons.api.viewState.enable('G_LOANSEAHHC_356423');
             executeCommandCallbackEventArgs.commons.api.viewState.hide('G_LOANSEAHHC_140423'); 
             executeCommandCallbackEventArgs.commons.api.viewState.hide('QV_EF50_UVK53'); 
             executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRMF_JP1');
             executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_JP1');
             executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_22S'); 
             executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRMF_22S'); 
             executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRMF_TP8'); 
             executeCommandCallbackEventArgs.commons.api.vc.viewState.VA_ARCHIVOJFAGWZSQ_219423.visible = true;
            
            //Bloquea Cabecera
            executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_NUMIDENTIFICTII_228423');
            executeCommandCallbackEventArgs.commons.api.viewState.disable('VA__174423');
            
        } else if (LNSPR.getQueryStrings().type == 'C') {
            executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_READJUSTDATEHXG_933423');
            executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_REFERENCIALHVKA_159423');
            executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_SIGNKLSEFBDNEKD_114423');
            executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_FACTORGZZGBQQEQ_812423');
            executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_PERCENTAGEJSRSR_369423');
            executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_MANTIENECUOTAAA_735423');

    }else {
         executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRMF_JP1');
        executeCommandCallbackEventArgs.commons.api.grid.removeAllRows("MassivePayments");
        }

    }else {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_VERIFIQRL_10425', false, null, timer);
    
    }
};
