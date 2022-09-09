//Entity: Payment
//Payment.customer (TextInputButton) View: PaymentsForm
task.textInputButtonEvent.VA_CUSTOMERMUPBSTT_916199 = function( textInputButtonEventArgs ) {
    textInputButtonEventArgs.commons.execServer = false;
    textInputButtonEventArgs.model.Payment.reference = "";
    var nav = textInputButtonEventArgs.commons.api.navigation;

    nav.label = cobis.translate('LNSPR.LBL_LNSPR_BSQUEDAIE_72552');
    nav.customAddress = {
        id: "findCustomer",
        url: "customer/templates/find-customers-tpl.html"
    };
    nav.modalProperties = {
        size: 'lg'
    };
    nav.scripts = [{
        module: cobis.modules.CUSTOMER,
        files: ["/customer/services/find-customers-srv.js",
                "/customer/controllers/find-customers-ctrl.js"]
        }];
    
};