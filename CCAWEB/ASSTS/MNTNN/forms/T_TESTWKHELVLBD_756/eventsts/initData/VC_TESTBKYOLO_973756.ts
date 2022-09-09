//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ProjectOtherCharges
    task_initData_VC_TESTBKYOLO_973756 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = false;
        let api: any = initDataEventArgs.commons.api;
        let mode: any = initDataEventArgs.commons.api.vc.mode;
        if (mode === 2){
            initDataEventArgs.commons.api.navigation.getCustomDialogParameters().entity = initDataEventArgs.commons.api.parentVc?.model.Loan;
            initDataEventArgs.commons.execServer = true;          
            api.viewState.disable("VA_TEXTINPUTBOXUFN_810872");            
            api.viewState.disable("VA_COMMENTARYRPSHX_258872");
            api.viewState.disable("VA_2011UKZSBSFRWRA_245872");
            api.viewState.disable("VA_BASECALCULATONI_509872");
    } else {
            api.viewState.enable("VA_TEXTINPUTBOXUFN_810872");
            api.viewState.enable("VA_COMMENTARYRPSHX_258872");
            api.viewState.enable("VA_2011UKZSBSFRWRA_245872");
            api.viewState.disable("VA_BASECALCULATONI_509872");
        }
    };