
//Start signature to Callback event to QV_WX74_OJZ40
task_gridRowDeletingCallback_QV_WX74_OJZ40 = (
     entities: Model,
     gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
     if (gridRowDeletingCallbackEventArgs.success) {
          gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, timer);

          entities.PaymentAutomatic.institution = null
          entities.PaymentAutomatic.institutionName = null
          entities.PaymentAutomatic.institutionOld = null
          entities.PaymentAutomatic.client = null
          entities.PaymentAutomatic.clientName = null
          entities.PaymentAutomatic.clientOld = null
          entities.PaymentAutomatic.comments = null
          entities.PaymentAutomatic.percentage = 0.0
          entities.PaymentAutomatic.account = null

          gridRowDeletingCallbackEventArgs.commons.args.mode = executeCommandEventArgs.commons.constants.mode.Insert
          gridRowDeletingCallbackEventArgs.commons.api.viewState.label("VA_VABUTTONNVDIOQB_352232", "LNSPR.LBL_LOANS_LIMPIARVF_75606");//Cmd Limpiar
          gridRowDeletingCallbackEventArgs.commons.api.viewState.label("VA_VABUTTONXOCQZHP_695232", "LNSPR.LBL_LOANS_AADIRWOQO_72396");//Cmd Añadir
     }
     gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_WX74_OJZ40');
};
