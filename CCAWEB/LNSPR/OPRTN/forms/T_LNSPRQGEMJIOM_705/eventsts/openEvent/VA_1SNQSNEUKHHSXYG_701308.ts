

//Entity: Entity5
//Entity5.attribute1 (TextInputButton) View: LoansLineGuaranteesForm
task_textInputButtonEvent_VA_1SNQSNEUKHHSXYG_701308 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;
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


    textInputButtonEventArgs.commons.execServer = false;
};