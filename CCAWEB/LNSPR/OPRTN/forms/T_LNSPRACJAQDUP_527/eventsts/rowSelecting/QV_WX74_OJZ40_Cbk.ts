
//Start signature to Callback event to QV_WX74_OJZ40
task_gridRowSelectingCallback_QV_WX74_OJZ40 = (
     entities: Model,
     gridRowSelectingCallbackEventArgs: CobisModelGridRowSelectingCallbackEventArgs
) => {
     if(gridRowSelectingCallbackEventArgs.success==true){
          gridRowSelectingCallbackEventArgs.commons.api.viewState.label("VA_VABUTTONNVDIOQB_352232", "LNSPR.LBL_LNSPR_CANCELARR_70217");//Cmd Cancelar
     }
};
