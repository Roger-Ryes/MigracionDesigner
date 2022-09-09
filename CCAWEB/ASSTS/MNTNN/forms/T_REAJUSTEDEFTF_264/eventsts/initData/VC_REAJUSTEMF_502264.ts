//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ReadjustmentDetalilsLoanForm
    task_initData_VC_REAJUSTEMF_502264 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = true;

        let model: any = initDataEventArgs.commons.api.vc.model;
        model.Loan = initDataEventArgs.commons.api.parentVc?.model.Loan;
        model.ReadjustmentLoanCab = initDataEventArgs.commons.api.navigation
                .getCustomDialogParameters().readjustmentLoanCab;
    };