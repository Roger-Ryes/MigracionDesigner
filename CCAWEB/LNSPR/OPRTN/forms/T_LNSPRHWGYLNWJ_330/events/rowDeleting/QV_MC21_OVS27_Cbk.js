//Start signature to Callback event to QV_MC21_OVS27
task.gridRowDeletingCallback.QV_MC21_OVS27 = function (entities, gridRowDeletingCallbackEventArgs) {
    var parentVc = gridRowDeletingCallbackEventArgs.commons.api.parentVc;
    var viewState = gridRowDeletingCallbackEventArgs.commons.api.viewState;
    
    
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
