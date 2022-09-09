//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ExtendsQuotaFormMain
    task_initData_VC_EXTENDSQMN_712926 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        // initDataEventArgs.commons.execServer = true;
        let commons: any = initDataEventArgs.commons;

        let api: any=initDataEventArgs.commons.api;
        let parameters: any=api.navigation.getCustomDialogParameters();
        entities.Loan=parameters.parameters.loan;

        initDataEventArgs.commons.api.viewState.hide('VC_DFZRKBDHHZ_908926');

        commons.execServer = true;
    };