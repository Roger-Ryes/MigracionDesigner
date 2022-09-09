

//Entity: LoanSearchFilter
//LoanSearchFilter.codClient (TextInputButton) View: StatusChangeMassive
task_textInputButtonEvent_VA_CODCLIENTZHOTEY_615293 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

    let nav: any = textInputButtonEventArgs.commons.api.navigation;
    nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_INGRESOGA_95398');
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