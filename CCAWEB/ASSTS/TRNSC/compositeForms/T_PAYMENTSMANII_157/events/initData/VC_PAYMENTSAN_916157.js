//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: PaymentsMain
    task.initData.VC_PAYMENTSAN_916157 = function (entities, initDataEventArgs){
        var commons = initDataEventArgs.commons;
        var api=initDataEventArgs.commons.api;
        var parameters=api.navigation.getCustomDialogParameters(); 
        entities.Loan = parameters.parameters.loan;
        entities.Payment.operationCurrencyType = entities.Loan.codCurrency;

        initDataEventArgs.commons.api.viewState.hide("VA_NUMCHECKQLTBIOX_669141");
        initDataEventArgs.commons.api.viewState.hide("VA_TEXTINPUTBOXSJQ_831141");
        initDataEventArgs.commons.api.viewState.hide("VA_VASIMPLELABELLL_923141");
        entities.Payment.onLine = true;
        entities.Payment.value = 0;
        entities.Payment.retention = 0;
        entities.LeftOverPayment.value = 0
        commons.execServer = true; 
        
    if (parameters.parameters.loan.tipo === "G") {
            initDataEventArgs.commons.api.viewState.hide("VC_QXXNBZDVLA_903850");
            initDataEventArgs.commons.api.viewState.show("VC_DIACLAQFTU_189604");
        } else {
            initDataEventArgs.commons.api.viewState.show("VC_QXXNBZDVLA_903850");
            initDataEventArgs.commons.api.viewState.hide("VC_DIACLAQFTU_189604");
        }
        
    initDataEventArgs.commons.api.viewState.hide('VC_ZNXEHASOGQ_840157');
    initDataEventArgs.commons.api.viewState.disable("VA_NEGOTIATEDHPDLB_812141");
        

    };