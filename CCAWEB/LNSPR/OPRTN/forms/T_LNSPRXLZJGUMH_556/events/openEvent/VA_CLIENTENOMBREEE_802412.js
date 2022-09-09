//Entity: LoansLinesHeader
//LoansLinesHeader.clienteNombre (TextInputButton) View: LoanLinesCreation
task.textInputButtonEvent.VA_CLIENTENOMBREEE_802412 = function( textInputButtonEventArgs ) {
    
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
                "/customer/controllers/find-customers-ctrl.js"
                ]
    }]; 
    
    if (textInputButtonEventArgs.commons.api.vc.model.LoanLinesCreation.nature == 'P') {
        nav.customDialogParameters = {
            mode: "findJuridicPerson"
        }
    }

};