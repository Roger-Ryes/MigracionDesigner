//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ReadjustmentLoanCabForm
    task_initData_VC_REAJUSTEMF_738801 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = false;

        let commons: any = initDataEventArgs.commons;
        let api: any=initDataEventArgs.commons.api;
        let parameters: any=api.navigation.getCustomDialogParameters();

        entities.Loan = parameters.parameters.loan;
    };