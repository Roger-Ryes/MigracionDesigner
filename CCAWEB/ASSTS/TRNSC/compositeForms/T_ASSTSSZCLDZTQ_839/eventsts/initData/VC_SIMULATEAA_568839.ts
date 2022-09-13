//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: SimulateMain
    //designer-hint: 2304: Cannot find name 'task_initData_VC_SIMULATEAA_568839'.
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 2304: Cannot find name 'CobisModelInitDataEventArgs'.
    task_initData_VC_SIMULATEAA_568839 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = true;

        //designer-hint: 6133: 'commons' is declared but its value is never read.
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