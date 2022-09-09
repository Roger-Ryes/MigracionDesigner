//Entity: RefinanceLoanFilter
    //RefinanceLoanFilter.clientName (TextInputButton) View: RefinanceLoansFilter
    
    //designer-hint: 2304: Cannot find name 'task_textInputButtonEvent_VA_CLIENTNAMEBGXWU_198515'.
    //designer-hint: 2304: Cannot find name 'CobisModelOnInputButtonEventArgs'.
    task_textInputButtonEvent_VA_CLIENTNAMEBGXWU_198515 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
                               textInputButtonEventArgs.commons.execServer = false;
                               let nav: any = textInputButtonEventArgs.commons.api.navigation;

                               nav.label =this.cobis.translate('ASSTS.LBL_ASSTS_BSQUEDAEC_38534');
                               nav.customAddress = {
                                                          id: "findCustomer",
                                                          url:"customer/templates/find-customers-tpl.html"
                               };
                               nav.modalProperties = {
                                                          size: 'lg'
                               };
                               nav.scripts = [{
                                                          module: this.cobis.modules.CUSTOMER,
                                                          files: ["/customer/services/find-customers-srv.js",
                                                                  "/customer/controllers/find-customers-ctrl.js"]
                               }];
    };