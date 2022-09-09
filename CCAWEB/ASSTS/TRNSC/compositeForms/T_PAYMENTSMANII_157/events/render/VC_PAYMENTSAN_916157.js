//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: PaymentsMain
    task.render = function (entities, renderEventArgs){
        var listDeferredRefund = entities.DeferredRefundList;
        renderEventArgs.commons.execServer = false;
        renderEventArgs.commons.api.viewState.hide("CM_TPAYMENT_Y_2");
    if (entities.Loan.tipo == 'G') {
            renderEventArgs.commons.api.viewState.hide("CM_PAYMENTS_SS1");
            renderEventArgs.commons.api.viewState.hide("CM_PAYMENTS_T7N");
            renderEventArgs.commons.api.viewState.hide("CM_PAYMENTS_NNS");
            renderEventArgs.commons.api.viewState.hide("CM_TPAYMENT_MA5");
            renderEventArgs.commons.api.viewState.hide("VA_CHECKBOXIPQLEBS_550141");
        }
    renderEventArgs.commons.api.viewState.hide("VA_TEXTINPUTBOXHQX_290141");
    renderEventArgs.commons.api.viewState.disable("VA_QUOTATIONVALUEE_804141");
    renderEventArgs.commons.api.viewState.disable("VA_TYPEQUOTATIOPNO_482141");
    renderEventArgs.commons.api.viewState.disable("VA_QUOTATIONEPFTUZ_479141");
    renderEventArgs.commons.api.viewState.disable("VA_TYPEQUOTATIOTNN_114141");
    renderEventArgs.commons.api.viewState.disable("VA_OPERATIONCURYEE_868141");
    renderEventArgs.commons.api.viewState.hide("G_PAYMENTSSS_505141");
    renderEventArgs.commons.api.viewState.hide("G_PAYMENTSSS_563141");
    renderEventArgs.commons.api.viewState.hide("CM_PAYMENTS_SS1");

    renderEventArgs.commons.api.viewState.disable("VA_AMOUNTPAYMENTTT_215141");

    entities.Payment.currencyType = null;
     entities.Payment.quotation = null;

    //Devolucion rubros cuando es agregada
    if(listDeferredRefund && listDeferredRefund.data().length > 0){
       renderEventArgs.commons.api.viewState.show("G_PAYMENTSSS_377141");
     }else{
       renderEventArgs.commons.api.viewState.hide("G_PAYMENTSSS_377141");   
     }

    };