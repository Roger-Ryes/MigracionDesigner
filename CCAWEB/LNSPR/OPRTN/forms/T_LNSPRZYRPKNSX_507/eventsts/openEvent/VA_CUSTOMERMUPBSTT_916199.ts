//Entity: Payment
//Payment.customer (TextInputButton) View: PaymentsForm
task_textInputButtonEvent_VA_CUSTOMERMUPBSTT_916199 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    textInputButtonEventArgs.model.Payment.reference = "";
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_BSQUEDAIE_72552');
    nav.customAddress = {
        id: "findCustomer",
        url: "customer/templates/find-customers-tpl.html"
    };
    nav.modalProperties = {
        size: 'lg'
    };
    nav.scripts = [{
        module: this.cobis.modules.CUSTOMER,
        files: ["/customer/services/find-customers-srv.js",
                "/customer/controllers/find-customers-ctrl.js"]
        }];
};