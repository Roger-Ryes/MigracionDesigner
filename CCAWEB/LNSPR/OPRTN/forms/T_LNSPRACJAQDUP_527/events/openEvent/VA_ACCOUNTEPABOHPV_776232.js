

//Entity: PaymentAutomatic
//PaymentAutomatic.account (TextInputButton) View: RePaymentCreateForm
task.textInputButtonEvent.VA_ACCOUNTEPABOHPV_776232 = function( textInputButtonEventArgs ) {

    textInputButtonEventArgs.commons.execServer = false;
   
    //Open Modal
    var nav = textInputButtonEventArgs.commons.api.navigation;
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