

//Entity: PaymentAutomatic
//PaymentAutomatic.client (TextInputButton) View: RepaymentCreateForm
task_textInputButtonEvent_VA_CLIENTNIXWOQDSD_193232 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    if(nav.getCustomDialogParameters()){
        nav.label = this.cobis.translate("LNSPR.LBL_LNSPR_BSQUEDAIE_72552");
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRWENJKGKJ_579',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANDEBOLR_210579'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.modalProperties = {
            size: 'lg',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            bankId: textInputButtonEventArgs.model.PaymentAutomatic.bankId,
        };
    }
};