//Start signature to Callback event to QV_MC21_OVS27
task_gridRowDeletingCallback_QV_MC21_OVS27 = (
   entities: Model,
   gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
   let parentVc: any = gridRowDeletingCallbackEventArgs.commons.api.parentVc;
   let viewState: any = gridRowDeletingCallbackEventArgs.commons.api.viewState;


   if (gridRowDeletingCallbackEventArgs.success) {
       gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, timer);
   }

   if(parentVc && parentVc.id == 'VC_FSEARCHRUU_598110'){
      state = entities.GeneralInformation.codState;
   //asignacion variable actualizacion prestamos != no vigente
      if(state != stateOp){
      viewState.enable('CM_TLNSPRVJ_776'); //habilitar transmitir
   }
   }


   gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_MC21_OVS27');
};
