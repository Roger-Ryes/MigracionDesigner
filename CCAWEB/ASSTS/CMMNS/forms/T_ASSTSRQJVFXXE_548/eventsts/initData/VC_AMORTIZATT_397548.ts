//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: AmortizationModal
    task_initData_VC_AMORTIZATT_397548 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = true;

        //initDataEventArgs.commons.serverParameters.Loan = true;

        let param: any = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();

        entities.Loan = param.Loan;
        entities.AmortizationSimulate = param.AmortizationSimulate;
    };