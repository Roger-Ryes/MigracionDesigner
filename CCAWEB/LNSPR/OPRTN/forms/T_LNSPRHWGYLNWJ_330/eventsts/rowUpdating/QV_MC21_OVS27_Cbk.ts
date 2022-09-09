//Start signature to Callback event to QV_MC21_OVS27
task_gridRowUpdatingCallback_QV_MC21_OVS27 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    let viewState: any = gridRowUpdatingCallbackEventArgs.commons.api.viewState;
    let parentVc: any = gridRowUpdatingCallbackEventArgs.commons.api.parentVc;


    if (gridRowUpdatingCallbackEventArgs.success) {
        gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_MODIFICEO_25691', false, null, timer);
    }

    if(parentVc && parentVc.id == 'VC_FSEARCHRUU_598110'){
        state = entities.GeneralInformation.codState;
    //asignacion variable actualizacion prestamos != no vigente
       if(state != stateOp){
       viewState.enable('CM_TLNSPRVJ_776'); //habilitar transmitir
    }
    }


    gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_MC21_OVS27');
};
