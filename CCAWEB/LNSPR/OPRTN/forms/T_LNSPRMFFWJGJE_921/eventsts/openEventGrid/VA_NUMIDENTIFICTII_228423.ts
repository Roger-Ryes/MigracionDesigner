//Entity: LoanSearchFilter
//LoanSearchFilter.numIdentification (TextInputButton) View: LoanSearchForm
task_textInputButtonEventGrid_VA_NUMIDENTIFICTII_228423 = (textInputButtonEventGridEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventGridEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventGridEventArgs.commons.api.navigation;
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
        files: [
            "/customer/services/find-customers-srv.js",
            "/customer/controllers/find-customers-ctrl.js"]
    }];
};