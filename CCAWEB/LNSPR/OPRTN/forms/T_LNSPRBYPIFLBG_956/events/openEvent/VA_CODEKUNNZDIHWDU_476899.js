//Entity: OperationCRUDFormEntity
//OperationCRUDFormEntity.code (TextInputButton) View: PassivePortfolioCreation
task.textInputButtonEvent.VA_CODEKUNNZDIHWDU_476899 = function (textInputButtonEventArgs) {

    textInputButtonEventArgs.commons.execServer = false;
    var nav = textInputButtonEventArgs.commons.api.navigation;
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
    nav.customDialogParameters = {
        mode: "findJuridicPerson"
    }

};
