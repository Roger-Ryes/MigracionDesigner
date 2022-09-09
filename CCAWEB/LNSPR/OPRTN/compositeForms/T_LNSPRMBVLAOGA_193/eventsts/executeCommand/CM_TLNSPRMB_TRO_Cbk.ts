
//Start signature to Callback event to CM_TLNSPRMB_TRO
task_executeCommandCallback_CM_TLNSPRMB_TRO = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    if (executeCommandCallbackEventArgs.success) {
        let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_OPERACIAA_39249", false, null, timer);

        viewState.disable('CM_TLOANSJY_N2B');//Commando
        viewState.disable('CM_TLNSPRMB_TRO');//T_LNSPRMBVLAOGA_193 = Commando//Transmitir

        viewState.disable('VA_VABUTTONXCGGMOI_839221'); //Información general - Button Crear
        viewState.disable('VA_VAVABUTTONTR__P_260587'); //Rubros - Button Guardar
        viewState.disable('VA_VABUTTONFIRPTAQ_308309'); //Pametros Genrales - Button Guardar

        viewState.disable('G_OPERATINLN_412221');//Información General - Group1504
        viewState.disable('G_OPERATINOO_657221');//Información General - Group2254
        viewState.disable('G_OPERATIOOO_201221');//Información General - Group1659
        viewState.disable('G_OPERATIOOO_148221');//Información General - Group2995

        viewState.disable('G_OPERATIMNT_255587');//Rubros - Group1657
        viewState.disable('G_OPERATITIM_774587');//Rubros - Group1466 //Button

        viewState.disable('G_OPERATILGA_375309');//Parametro Generales - Group1449
        viewState.disable('G_OPERATISNM_844309');//Parametro Generales - Group1258
        viewState.disable('G_OPERATINPL_449309');//Parametro Generales - Group1248 //Button


        viewState.disable('G_OPERATIAEO_858198');//Amortizacion - Group1844
        //viewState.disable('G_OPERATIANT_136198');//Amortizacion - Group1186
        viewState.disable('G_OPERATIYTE_172198');//Amortizacion - Group1319
        viewState.disable('G_OPERATIMTO_363198');//Amortizacion - Group2565 //Button
    }
};
