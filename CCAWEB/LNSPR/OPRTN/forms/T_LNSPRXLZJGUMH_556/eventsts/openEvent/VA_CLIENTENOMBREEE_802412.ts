//Entity: LoansLinesHeader
//LoansLinesHeader.clienteNombre (TextInputButton) View: LoanLinesCreation
task_textInputButtonEvent_VA_CLIENTENOMBREEE_802412 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
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

    if (textInputButtonEventArgs.commons.api.vc.model.LoanLinesCreation.nature == 'P') {
        nav.customDialogParameters = {
            mode: "findJuridicPerson"
        }
    }
};