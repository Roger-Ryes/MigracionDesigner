//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: REAJUSTE
    task_initData_VC_REAJUSTEKP_207872 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.api.viewState.hide('VC_VPRGARGERZ_116872');

        let commons: any = initDataEventArgs.commons;
        let api: any=initDataEventArgs.commons.api;
        let parameters: any=api.navigation.getCustomDialogParameters();
        entities.Loan = parameters.parameters.loan;

        commons.execServer = false;
    };