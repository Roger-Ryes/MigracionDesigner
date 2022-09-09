//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: OtherCharges
    task_initData_VC_PROJECTIAA_407344 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        // initDataEventArgs.commons.execServer = true;
        let commons: any = initDataEventArgs.commons;

        let api: any=initDataEventArgs.commons.api;
        let parameters: any=api.navigation.getCustomDialogParameters();
        entities.Loan = parameters.parameters.loan;

        initDataEventArgs.commons.api.viewState.hide('VC_UJNNOFLWUJ_608344');


        commons.execServer = true;
    };