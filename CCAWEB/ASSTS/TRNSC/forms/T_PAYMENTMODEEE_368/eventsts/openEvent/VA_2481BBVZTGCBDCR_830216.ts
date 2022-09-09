//Entity: PaymentForm
    //PaymentForm.accountNumber (TextInputButton) View: PaymentModeForm
    
    task_textInputButtonEvent_VA_2481BBVZTGCBDCR_830216 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
        textInputButtonEventArgs.commons.execServer = false;
        //if(textInputButtonEventArgs.model.PaymentForm.payFormCategory != ""){
        //Open Modal
    if (textInputButtonEventArgs.model.PaymentForm.clientId && textInputButtonEventArgs.commons.api.viewState.getDataItem("Spacer2675").pCobis == 4) {
        let nav: any = textInputButtonEventArgs.commons.api.navigation;
        nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_CUENTASAT_41675'); //Cuentas 
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_BANKACCOUNTOA_777',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_BANKACCOMU_224777'
        };
        nav.queryParameters = {
            mode: 1
        };
        nav.modalProperties = {
            size: 'md',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            customerID: textInputButtonEventArgs.model.PaymentForm.clientId,
            payFormId:  textInputButtonEventArgs.model.PaymentForm.payFormId,            
            desOpeType: textInputButtonEventArgs.model.Loan.operationTypeID,
            currencyId: textInputButtonEventArgs.model.PaymentForm.currencyId
        };
    } else {
        textInputButtonEventArgs.cancel = true;
        textInputButtonEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_DIGITELEC_98771", false, null, timer);
    }
         //}
    };