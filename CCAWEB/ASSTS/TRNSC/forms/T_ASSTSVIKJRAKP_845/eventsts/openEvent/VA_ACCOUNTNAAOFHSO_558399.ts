

//Entity: Company
//Company.account (TextInputButton) View: CompanyCreateForm
task_textInputButtonEvent_VA_ACCOUNTNAAOFHSO_558399 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let api: any = textInputButtonEventArgs.commons.api;
    let mode: any = textInputButtonEventArgs.commons.constants.mode;
    if(api.vc.mode != mode.Query){
        //Open modal
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
            codCliente: textInputButtonEventArgs.model.Company.client,
            formaPago: textInputButtonEventArgs.model.Company.paymentForm
        };
    }
};