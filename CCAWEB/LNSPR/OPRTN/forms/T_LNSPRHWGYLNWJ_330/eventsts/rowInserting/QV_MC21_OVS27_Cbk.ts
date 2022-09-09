//Start signature to Callback event to QV_MC21_OVS27
task_gridRowInsertingCallback_QV_MC21_OVS27 = (
    entities: Model,
    gridRowInsertingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    let viewState: any = gridRowInsertingCallbackEventArgs.commons.api.viewState;
    let parentVc: any = gridRowInsertingCallbackEventArgs.commons.api.parentVc;


    if (gridRowInsertingCallbackEventArgs.success) {
        gridRowInsertingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_INGRESARE_39730', false, null, timer);
    }
    if(parentVc && parentVc.id == 'VC_FSEARCHRUU_598110'){
         state = entities.GeneralInformation.codState;
   //asignacion variable actualizacion prestamos != no vigente
      if(state != stateOp){
      viewState.enable('CM_TLNSPRVJ_776'); //habilitar transmitir
      }
    }

    gridRowInsertingCallbackEventArgs.commons.api.grid.refresh('QV_MC21_OVS27');
};
