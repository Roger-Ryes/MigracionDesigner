
//Start signature to Callback event to CM_TLNSPRTZ_RRO
task_executeCommandCallback_CM_TLNSPRTZ_RRO = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
     //here your code
     if (executeCommandCallbackEventArgs.success) {
         executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACICA_42329', false, null, timer);

         /*var nav = executeCommandCallbackEventArgs.commons.api.navigation;

         nav.address = {
             moduleId: 'LNSPR',
             subModuleId: 'OPRTN',
             taskId: 'T_LNSPRTZAAOTEC_626',
             taskVersion: '1.0.0',
             viewContainerId: 'VC_LOANSSIMOO_401626'
         };

         nav.queryParameters = {
             newCustomer: "N",
             functionality: "SCO"
         };*/

         let idAux: any = this.cobis.container.tabs.getCurrentTab().id;

         let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
         let nameAux: any = undefined;

         if (this.cobis.container.tabs.getCurrentTab().name != undefined){
             nameAux = this.cobis.container.tabs.getCurrentTab().name;
         }else{
             nameAux = this.cobis.translate("LNSPR.LBL_LNSPR_SIMULACMO_93778");
         }

         this.cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);
     }
};
