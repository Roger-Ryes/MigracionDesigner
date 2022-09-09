//Entity: LoanSearchFilter
//LoanSearchFilter.numIdentification (TextInputButton) View: LoanSearchForm
task.textInputButtonEventGrid.VA_NUMIDENTIFICTII_228423 = function( textInputButtonEventGridEventArgs ) {
    textInputButtonEventGridEventArgs.commons.execServer = false;
    var nav = textInputButtonEventGridEventArgs.commons.api.navigation;
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
        files: [
            "/customer/services/find-customers-srv.js",
            "/customer/controllers/find-customers-ctrl.js"]
    }];
};