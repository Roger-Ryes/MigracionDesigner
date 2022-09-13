//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: DisbursementForm
    //designer-hint: 2304: Cannot find name 'task_initData_VC_DISBURSEMT_116810'.
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 2304: Cannot find name 'CobisModelInitDataEventArgs'.
    task_initData_VC_DISBURSEMT_116810 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    entities.Loan = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loan;
    entities.LoanAdditionalInformation.currencyOp = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loan.codCurrency;

    initDataEventArgs.commons.api.viewState.disable('G_DISBURSEET_626405');
    
    initDataEventArgs.commons.execServer = true;
        //initDataEventArgs.commons.serverParameters.entityName = true;
    };