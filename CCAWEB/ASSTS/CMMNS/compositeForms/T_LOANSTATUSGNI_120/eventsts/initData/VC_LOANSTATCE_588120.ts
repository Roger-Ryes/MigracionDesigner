//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: LoanStatusChangeMain
    task_initData_VC_LOANSTATCE_588120 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        //initDataEventArgs.commons.execServer = true;
        let commons: any = initDataEventArgs.commons;

        let api: any=initDataEventArgs.commons.api;
        let parameters: any=api.navigation.getCustomDialogParameters();
        entities.Loan = parameters.parameters.loan;

        entities.Loan.statusCopy = entities.Loan.status
        commons.execServer = true
    };