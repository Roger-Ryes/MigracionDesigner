//Start signature to Callback event to CM_TLNSPRMF_JP1
task_executeCommandCallback_CM_TLNSPRMF_JP1 = (
  entities: Model,
  executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
  //here your code
  if (executeCommandCallbackEventArgs.success == true) {
    //var datos = entities.MassivePayments;
   // var contador = 0;
    executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRMF_JP1");
    executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_22S');
    executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRMF_22S");
    executeCommandCallbackEventArgs.commons.api.viewState.show("CM_TLNSPRMF_TP8");
    executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRMF_TP8");
    executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_3SN");

    /*for (let i = 0; i < datos.length; i++) {
      let dato = datos[i];
      if (dato.errorPM) {
        contador++;
      }
    }*/

    if (entities.ErrorMassivePayments.length >= 2) {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEO_37894",false,null,timer);
    
    } else {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TRANSMION_38404",false,null,timer);
    }
  }

};
