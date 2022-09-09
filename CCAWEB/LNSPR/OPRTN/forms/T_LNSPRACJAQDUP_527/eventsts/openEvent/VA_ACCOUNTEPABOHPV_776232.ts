

//Entity: PaymentAutomatic
//PaymentAutomatic.account (TextInputButton) View: RePaymentCreateForm
task_textInputButtonEvent_VA_ACCOUNTEPABOHPV_776232 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

    //Open Modal
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRHZIKGUNT_664',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_ACCONTSOPT_347664'
    };

    nav.queryParameters = {
        mode: 8
    };
    nav.modalProperties = {
        size: 'md',
        callFromGrid: false
    };

    nav.customDialogParameters = {
        codCliente: textInputButtonEventArgs.model.PaymentAutomatic.client,
        formaPago: textInputButtonEventArgs.model.PaymentAutomatic.paymentMethod
    };
};