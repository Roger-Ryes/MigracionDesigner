

//Entity: PaymentAutomatic
//PaymentAutomatic.client (TextInputButton) View: RepaymentCreateForm
task.textInputButtonEvent.VA_CLIENTNIXWOQDSD_193232 = function( textInputButtonEventArgs ) {

    textInputButtonEventArgs.commons.execServer = false;
    var nav = textInputButtonEventArgs.commons.api.navigation;

    if(nav.getCustomDialogParameters()){
        nav.label = cobis.translate("LNSPR.LBL_LNSPR_BSQUEDAIE_72552");
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