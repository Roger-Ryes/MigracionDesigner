//Start signature to Callback event to QV_MC21_OVS27
task.gridRowInsertingCallback.QV_MC21_OVS27 = function (entities, gridRowInsertingCallbackEventArgs) {
    var viewState = gridRowInsertingCallbackEventArgs.commons.api.viewState;
    var parentVc = gridRowInsertingCallbackEventArgs.commons.api.parentVc;
   
    
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
