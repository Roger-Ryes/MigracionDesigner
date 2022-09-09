

//Entity: Company
//Company.client (TextInputButton) View: CompanyCreateForm
task_textInputButtonEvent_VA_CLIENTRGTMTTEWO_906399 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let api: any = textInputButtonEventArgs.commons.api;
    let mode: any = textInputButtonEventArgs.commons.constants.mode;
    if(api.vc.mode != mode.Query){
        let nav: any = textInputButtonEventArgs.commons.api.navigation;
        nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_BSQUEDAEC_38534');
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
                "/customer/controllers/find-customers-ctrl.js"
            ]
        }];
    }
};