//Entity: OperationCRUDFormEntity
//OperationCRUDFormEntity.code (TextInputButton) View: PassivePortfolioCreation
task_textInputButtonEvent_VA_CODEKUNNZDIHWDU_476899 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
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
            "/customer/controllers/find-customers-ctrl.js"]
    }];
    nav.customDialogParameters = {
        mode: "findJuridicPerson"
    }
};
