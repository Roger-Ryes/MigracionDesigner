//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoanSearchForm
task.initData.VC_LOANSEARCH_100921 = function (entities, initDataEventArgs) {
    initDataEventArgs.commons.api.vc.viewState.VA_CODCURRENCYORMA_221423.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_DISBURSEMENTDTE_672423.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_STATEGXSFXFHGCB_183423.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_MIGRATEDOPERITA_354423.visible = false;

    entities.LoanSearchFilter.disbursementDate = null;
    entities.LoanSearchFilter.state = null;
    //entities.LoanSearchFilter.codCurrency  = "0";
    entities.LoanSearchFilter.migratedOperation = null;
    entities.ReadjustmentMEntity.factor = 0.00;
    entities.ReadjustmentMEntity.percentage = 0.00;

    initDataEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_197');
    initDataEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_388');
    initDataEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_351');

    initDataEventArgs.commons.api.vc.viewState.VA_NEXTREADJDATEEE_737423.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_TYPEOPERATIONNN_501423.visible = false;

    entities.LoanSearchFilter.mode = getQueryStrings().type;
    initDataEventArgs.commons.api.viewState.hide('G_LOANSEARCR_617423');
    initDataEventArgs.commons.api.viewState.hide("G_LOANSEAHHC_356423"); 
    initDataEventArgs.commons.api.viewState.hide('QV_PY15_EUR25');
    initDataEventArgs.commons.api.vc.viewState.G_LOANSEARCR_617423.visible = false;

    /*if (getQueryStrings().type == 'U') {
        initDataEventArgs.commons.api.viewState.hide('VA_SPACER2562CECVV_901423');
        initDataEventArgs.commons.api.vc.viewState.VA_CONDITIONLQYMCH_855423.visible = false;
        //Spacer ubicado después de la opción 'Reajustables'.
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2187YYOCB_420423.visible = false;
        //Spacer ubicado después de la opción 'Reajustables'.
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = true;
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2878UBAZR_925423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.VA_VAVABUTTONNJ9LB_637423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.G_LOANSEAHCH_634423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.G_LOANSEACRC_945423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_LOANSEAR_PN2.visible = false;

        initDataEventArgs.commons.api.vc.viewState.CM_TLNSPRMF_JP1.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_TLNSPRMF_NMS.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_TLNSPRMF_22S.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_TLNSPRMF_TP8.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_TLNSPRMF_3SN.visible = false;
        
        initDataEventArgs.commons.api.vc.viewState.VA_SELECCIONARTOOD_173423.visible = false;
        initDataEventArgs.commons.api.grid.hideColumn('QV_EF50_UVK53','seleccion');

        initDataEventArgs.commons.api.viewState.hide('CM_LOANSEAR_R04');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N');

        initDataEventArgs.commons.api.vc.viewState.VA_ARCHIVOJFAGWZSQ_219423.visible = false;
    } else */
    if (getQueryStrings().type === 'I') {

        initDataEventArgs.commons.api.vc.viewState.VA_CONDITIONLQYMCH_855423.visible = false;

        //Spacer ubicado después de la opción 'Reajustables'.
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2187YYOCB_420423.visible = false;

        //Spacer ubicado después de la opción 'Reajustables'.
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = true;

        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2878UBAZR_925423.visible = false;

        initDataEventArgs.commons.api.vc.viewState.VA_VAVABUTTONNJ9LB_637423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.G_LOANSEAHCH_634423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.G_LOANSEACRC_945423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_LOANSEAR_PN2.visible = false;

        initDataEventArgs.commons.api.viewState.hide('CM_LOANSEAR_R04');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N'); 
        initDataEventArgs.commons.api.viewState.show('CM_TLNSPRMF_NMS');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_JP1');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_22S');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_TP8');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_3SN');
       
        initDataEventArgs.commons.api.vc.viewState.VA_ARCHIVOJFAGWZSQ_219423.visible = true;
    }else if(getQueryStrings().type === 'P'){
             
        initDataEventArgs.commons.api.vc.viewState.VA_CONDITIONLQYMCH_855423.visible = false;
        //Spacer ubicado después de la opción 'Reajustables'.
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2187YYOCB_420423.visible = false;
        //Spacer ubicado después de la opción 'Reajustables'.
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = true;
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2878UBAZR_925423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.VA_VAVABUTTONNJ9LB_637423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.G_LOANSEAHCH_634423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.G_LOANSEACRC_945423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_LOANSEAR_PN2.visible = false;
        initDataEventArgs.commons.api.vc.viewState.G_LOANSEARCR_617423.visible = false;
        initDataEventArgs.commons.api.viewState.disable("CM_TLNSPRMF_22S");
        initDataEventArgs.commons.api.viewState.disable("CM_TLNSPRMF_JP1");

        initDataEventArgs.commons.api.viewState.hide("CM_LOANSEAR_R04");
    initDataEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_9NN");
    initDataEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_F7N");
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_NMS');
        initDataEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_TP8");
        initDataEventArgs.commons.api.viewState.show('CM_TLNSPRMF_3SN');
        initDataEventArgs.commons.api.viewState.enable('CM_TLNSPRMF_3SN');
              
    initDataEventArgs.commons.api.vc.viewState.VA_ARCHIVOJFAGWZSQ_219423.visible = true;
    } else if (getQueryStrings().type === 'C') { // Formulario - Cambio Tasa Masiva
        entities.ReadjustmentMEntity.factor = 0.00;
        entities.ReadjustmentMEntity.percentage = 0.00;

        initDataEventArgs.commons.api.vc.viewState.VA_SELECCIONARTOOD_173423.visible = false;

        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2187YYOCB_420423.visible = true;
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2878UBAZR_925423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.VA__174423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.G_LOANSEAHHC_140423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.G_LOANSEARCR_617423.visible = false;

        initDataEventArgs.commons.api.viewState.hide('CM_LOANSEAR_R04');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_NMS');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_JP1');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_22S');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_TP8');
        //initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_3SN');
    }
    initDataEventArgs.commons.execServer = false;
};
