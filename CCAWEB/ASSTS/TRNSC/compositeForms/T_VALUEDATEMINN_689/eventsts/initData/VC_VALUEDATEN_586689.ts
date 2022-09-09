//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ValueDateMain
    task_initData_VC_VALUEDATEN_586689 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        let commons: any = initDataEventArgs.commons;
        let api: any=initDataEventArgs.commons.api;
        let parameters: any=api.navigation.getCustomDialogParameters();
        entities.Loan = parameters.parameters.loan;
        commons.execServer = false;
        if (parameters.parameters.idMenu == 'FECHA') {
            entities.ValueDateFilter.option = Constants.MENU_VALUE_DATE;
            commons.api.viewState.hide('VA_OBSERVATIONDKBP_175866');
        } else if (parameters.parameters.idMenu == 'REVERSOS') {
            entities.ValueDateFilter.option = Constants.MENU_REVERSE;
            //$(".breadcrumb .ng-binding").last().text(commons.api.viewState.translate('ASSTS.LBL_ASSTS_REVERSAGQ_88268'));
                commons.api.viewState.hide('VA_LASTPROCESSDEET_724866');
                commons.api.viewState.hide('VA_3610ZOUUEMDZQED_313866');
            }
        if (entities.Loan.statusID == "0") {
                api.viewState.disable("CM_VALUEDAT_NNN");
            }
        initDataEventArgs.commons.api.viewState.hide('VC_DNIIMAEAVR_174689');
    };