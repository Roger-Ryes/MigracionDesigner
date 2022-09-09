//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: DisbursementForm
    task_initData_VC_DISBURSEMT_116810 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    entities.Loan = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loan;
    entities.LoanAdditionalInformation.currencyOp = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loan.codCurrency;

    initDataEventArgs.commons.api.viewState.disable('G_DISBURSEET_626405');
    
    initDataEventArgs.commons.execServer = true;
        //initDataEventArgs.commons.serverParameters.entityName = true;
    };