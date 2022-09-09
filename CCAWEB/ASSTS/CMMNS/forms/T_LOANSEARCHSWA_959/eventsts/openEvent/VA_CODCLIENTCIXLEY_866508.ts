//Entity: LoanSearchFilter
    //LoanSearchFilter.numIdentification (TextInputButton) View: LoanSearchForm
    
    task_textInputButtonEvent_VA_CODCLIENTCIXLEY_866508 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
        textInputButtonEventArgs.commons.execServer = false;
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
            files: ["/customer/services/find-customers-srv.js"
                                               , "/customer/controllers/find-customers-ctrl.js"]
            }];
        //Validacion para busqueda de operaciones grupales
        /* if (textInputButtonEventArgs.model.LoanInstancia.idOptionMenu == 14 && textInputButtonEventArgs.model.LoanSearchFilter.isGroup == true) {
            nav.label = cobis.translate('ASSTS.LBL_ASSTS_BSQUEDARR_52528');
            nav.customDialogParameters = {
                 client: 0,
                 type: 3,
                 mode: "findGroup"
            };
         } else {
            nav.customDialogParameters = {};
         }*/
    };