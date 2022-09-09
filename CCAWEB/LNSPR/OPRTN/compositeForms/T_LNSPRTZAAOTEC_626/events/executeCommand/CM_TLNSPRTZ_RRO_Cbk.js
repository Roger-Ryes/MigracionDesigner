
//Start signature to Callback event to CM_TLNSPRTZ_RRO
task.executeCommandCallback.CM_TLNSPRTZ_RRO = function(entities, executeCommandCallbackEventArgs) {
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
   
          var idAux = cobis.container.tabs.getCurrentTab().id;
          var urlAux = cobis.container.tabs.getCurrentTab().url;
          var nameAux = undefined;

          if (cobis.container.tabs.getCurrentTab().text != undefined){
              nameAux = cobis.container.tabs.getCurrentTab().text;
          }else{
              nameAux = cobis.translate("LNSPR.LBL_LNSPR_SIMULACMO_93778");
          }
  
          cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);
      }
};
