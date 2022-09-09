
//Start signature to Callback event to CM_TASSTSLF_TT1
task_executeCommandCallback_CM_TASSTSLF_TT1 = (
   entities: Model,
   executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
     if(executeCommandCallbackEventArgs.success){
        let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;

        viewState.disable('CM_TASSTSLF_TT1'); //boton aplicar
        viewState.disable('VA_2009HDDBTRLSCDO_776429'); //dia pago nuevo
        viewState.disable('VA_2836UZLPSXFHEDX_271429'); //mantiene cuota

        entities.ChangePayDayEntity.newPayDay = 1;

        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_LATRANSLO_19347", false,null,this.ASSTS.timer);
     }
};
