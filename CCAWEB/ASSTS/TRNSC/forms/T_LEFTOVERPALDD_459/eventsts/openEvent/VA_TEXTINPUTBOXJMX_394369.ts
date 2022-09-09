//Entity: LeftOverPayment
    //LeftOverPayment.reference (TextInputButton) View: LeftoverPaymentsModal
    
    task_textInputButtonEvent_VA_TEXTINPUTBOXJMX_394369 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
        textInputButtonEventArgs.commons.execServer = false;

        //Open Modal
        let nav: any = textInputButtonEventArgs.commons.api.navigation;

        nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_CUENTASAT_41675'); //Cuentas 
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_BANKACCOUNTIS_944',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_BANKACCOTT_940944'
        };
        nav.queryParameters = {
            mode: 1
        };
        nav.modalProperties = {
            size: 'md',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            customerID: this.customerCode,
            paymentType: textInputButtonEventArgs.model.LeftOverPayment.paymentType
        };
    };