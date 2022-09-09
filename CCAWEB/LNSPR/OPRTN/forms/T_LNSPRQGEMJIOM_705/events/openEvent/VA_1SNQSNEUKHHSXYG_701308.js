

//Entity: Entity5
//Entity5.attribute1 (TextInputButton) View: LoansLineGuaranteesForm
task.textInputButtonEvent.VA_1SNQSNEUKHHSXYG_701308 = function( textInputButtonEventArgs ) {


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
    

    textInputButtonEventArgs.commons.execServer = false;

};