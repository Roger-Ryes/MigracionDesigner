//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: SimulateMain
    task_initData_VC_SIMULATEAA_568839 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = true;

        let commons: any = initDataEventArgs.commons;
        let api: any = initDataEventArgs.commons.api;
        let parameters: any = api.navigation.getCustomDialogParameters();
        entities.Loan = parameters.parameters.loan;
        entities.AmortizationSimulate = [];

        let apiHeader: any = initDataEventArgs.commons.api.cobisPatterns.header;

        initDataEventArgs.commons.api.viewState.hide('VC_HSQKWBMJAF_924316');
        if (initDataEventArgs.commons.api.parentVc?.id == "VC_GENERALIAO_289119") {
            //initDataEventArgs.commons.api.viewState.hide('VC_HSQKWBMJAF_924316');
            apiHeader.loadHeader(false);
        } else {
            //initDataEventArgs.commons.api.viewState.show('VC_HSQKWBMJAF_924316');
            apiHeader.loadHeader(true);
        }
    };