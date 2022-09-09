//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: LoanDisbursementMain
    task_initData_VC_LOANDISBMN_824275 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
         let commons: any = initDataEventArgs.commons;
         let api: any=initDataEventArgs.commons.api;
         let parameters: any=api.navigation.getCustomDialogParameters();
         entities.Loan = parameters.parameters.loan;
         entities.LoanAdditionalInformation.currencyOp = entities.Loan.codCurrency;

         initDataEventArgs.commons.api.viewState.hide('VC_VBHENKGGPP_117275');
         initDataEventArgs.commons.serverParameters.LoanAdditionalInformation = true;
         initDataEventArgs.commons.serverParameters.LoanInstancia = true;
         initDataEventArgs.commons.serverParameters.Loan = true;
         initDataEventArgs.commons.serverParameters.DisbursementResult = true;
         initDataEventArgs.commons.serverParameters.LiquidateResult = true;
         initDataEventArgs.commons.serverParameters.GeneralParameters = true;
         commons.execServer = true;
    };