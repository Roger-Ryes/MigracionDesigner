//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ApplyClause
    task_initData_VC_APPLYCLASS_521533 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        //initDataEventArgs.commons.execServer = true;
        let commons: any = initDataEventArgs.commons;

        let api: any=initDataEventArgs.commons.api;
        let parameters: any=api.navigation.getCustomDialogParameters();
        entities.Loan = parameters.parameters.loan;

        initDataEventArgs.commons.api.viewState.hide('VC_ZFLEAUPGRQ_436533');


        commons.execServer = true;
    };