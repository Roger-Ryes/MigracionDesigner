//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ProjectionQuotaFormMain
    task_initData_VC_PROJECTIIU_405244 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        let api: any = initDataEventArgs.commons.api;
        let parameters: any = api.navigation.getCustomDialogParameters();
        entities.Loan = parameters.parameters.loan;

        let apiHeader: any = initDataEventArgs.commons.api.cobisPatterns.header;

        initDataEventArgs.commons.api.viewState.hide('VC_XAGJYCIGBI_296244');
        if (initDataEventArgs.commons.api.parentVc?.id == "VC_GENERALIAO_289119") {
            // initDataEventArgs.commons.api.viewState.hide('VC_XAGJYCIGBI_296244');
            apiHeader.loadHeader(false);
             initDataEventArgs.commons.execServer = false;
        } else {
            //initDataEventArgs.commons.api.viewState.show('VC_XAGJYCIGBI_296244');
            apiHeader.loadHeader(true);
             initDataEventArgs.commons.execServer = true;
        }
    };