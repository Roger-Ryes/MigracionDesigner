//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: RatesModal
    task.initData.VC_RATESMODAL_789953 = function (entities, initDataEventArgs){
        initDataEventArgs.commons.execServer = false;
        mode = initDataEventArgs.commons.api.vc.mode;
        closeModal = false;
        
    if (!entities.Rates.valueDeafult)
            entities.Rates.valueDeafult = 0;
    if (!entities.Rates.valueMin)
            entities.Rates.valueMin = 0;
    if (!entities.Rates.valueMax)
            entities.Rates.valueMax = 0;
    if (!entities.Rates.lockedDefault)
            entities.Rates.lockedDefault = 0;
    if (!entities.Rates.lockedMin)
            entities.Rates.lockedMin = 0;
    if (!entities.Rates.lockedMax)
            entities.Rates.lockedMax = 0;
    if (!entities.Rates.value)
            entities.Rates.value = 0;
        
        if (mode == 1) {
            //Valida que haya seleccionado una tasa en el grid de tasas
            var selectedTypeRate = initDataEventArgs.commons.api.grid.getSelectedRows('QV_1722_99596')[0];
            entities.Rates.clase = selectedTypeRate.clase;
            entities.Rates.rateType = selectedTypeRate.identifier;

    } else {
        initDataEventArgs.commons.execServer = true;
        }
    if (entities.Rates.portfolioClass) {
            entities.Rates.portfolioClass = entities.Rates.portfolioClass.trim();
            portfolioClassAux = entities.Rates.portfolioClass;
        }
        
        if (entities.Rates.clase == 'F') {
            initDataEventArgs.commons.api.viewState.enable("VA_REFERENCEVALEEE_875778");
            initDataEventArgs.commons.api.viewState.enable("VA_TYPEPOINTSQGJRC_416778");
            initDataEventArgs.commons.api.viewState.enable("VA_NUMBERDECIMALSL_248778");
            initDataEventArgs.commons.api.viewState.enable("VA_SIGNMINPDDMQZST_831778");
            initDataEventArgs.commons.api.viewState.enable("VA_SIGNMINKUSGFZGN_277778");
            initDataEventArgs.commons.api.viewState.enable("VA_VALUEMINGCHKTLJ_996778");
            initDataEventArgs.commons.api.viewState.enable("VA_SIGNMAXCQWMGYQB_195778");
            initDataEventArgs.commons.api.viewState.enable("VA_VALUEMAXAXNIZZF_909778");
            initDataEventArgs.commons.api.viewState.focus("VA_PORTFOLIOCLASSS_404778");
        } else {
            initDataEventArgs.commons.api.viewState.focus("VA_REFERENCEVALEEE_875778");
        }
    };