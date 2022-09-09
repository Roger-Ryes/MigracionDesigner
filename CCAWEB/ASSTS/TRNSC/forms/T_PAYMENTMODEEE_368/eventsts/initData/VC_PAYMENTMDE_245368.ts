//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: PaymentModeForm
    task_initData_VC_PAYMENTMDE_245368 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        entities.PaymentForm.currencyFlagAux = '0';
        let api: any = initDataEventArgs.commons.api;
        api.viewState.hide('Spacer2495');
        api.viewState.hide('Spacer2547');
        api.vc.viewState.Spacer1695.visible = false;
        api.viewState.hide('VA_4894WDHQNMCYSAK_586216');

        entities.Loan = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loan;
        entities.LoanAdditionalInformation = initDataEventArgs.commons.api.parentVc?.model.LoanAdditionalInformation;
        entities.LiquidateResult = initDataEventArgs.commons.api.parentVc?.model.LiquidateResult;

        initDataEventArgs.commons.api.vc.viewState.VA_AMOUNTTROZKVYME_221216.label =
            this.cobis.translate('ASSTS.LBL_ASSTS_VALOROPZW_68487') + " (" +
            entities.Loan.currencyName + ")";

        initDataEventArgs.commons.api.vc.viewState.VA_DIFFERENCELFJSU_881216.label =
            this.cobis.translate('ASSTS.LBL_ASSTS_DIFERENQI_53704') + " (" +
            entities.Loan.currencyName + ")";

        entities.GeneralParameters = initDataEventArgs.commons.api.parentVc?.model.GeneralParameters;
        entities.DisbursementResult = initDataEventArgs.commons.api.parentVc?.model.DisbursementResult;
        entities.PaymentForm.officeId = JSON.parse(sessionStorage.userOffice).code;

        //CAMBIA LABEL BENEFICIARION POR FONDEADOR
        if (initDataEventArgs.commons.api.parentVc?.model.Loan.natureOp == 'P') {
            initDataEventArgs.commons.api.vc.viewState.VA_6386FQVBTKCYFWG_461216.label =
                this.cobis.translate('ASSTS.LBL_ASSTS_FONDEADOR_22221')
        }

        initDataEventArgs.commons.execServer = false;
    };