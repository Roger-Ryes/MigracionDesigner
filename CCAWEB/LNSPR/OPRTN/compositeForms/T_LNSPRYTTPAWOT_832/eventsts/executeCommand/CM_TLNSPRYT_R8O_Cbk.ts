
//Start signature to Callback event to CM_TLNSPRYT_R8O
task_executeCommandCallback_CM_TLNSPRYT_R8O = (
     entities: Model,
     executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
     //here your code
     if (executeCommandCallbackEventArgs.success) {
          executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_OPERACIAA_39249", false, null, timer);
          let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;
          //Información general
          viewState.disable('G_PASSIVERIF_136899');//Group1372
          viewState.disable('G_PASSIVEPRT_287899');//Group2503
          viewState.disable('G_PASSIVENON_766899');//Group2619
          viewState.disable('G_PASSIVEOLI_739899');//Group2522
          viewState.disable('VA_VAVABUTTONWNJI5_490899');//Buttun crear

          //Rubros
          viewState.disable('G_OPERATIMNT_255587');//Group1657
          viewState.disable('VA_VAVABUTTONTR__P_260587');//Buton Guardar

          //Parametros generales
          viewState.disable('G_OPERATISNM_844309');//Group1258
          viewState.disable('G_OPERATILGA_375309');//Group1449
          viewState.disable('VA_VABUTTONFIRPTAQ_308309');//Button Guardar

          //Amortizacion
          viewState.disable('G_OPERATIAEO_858198');//Group1844
          viewState.disable('G_OPERATIYTE_172198');//Group1319
          viewState.disable('G_OPERATIMTO_363198');//Group2565

          viewState.disable('CM_TLNSPRYT_R8O');//Command Transmitir
     }
};
