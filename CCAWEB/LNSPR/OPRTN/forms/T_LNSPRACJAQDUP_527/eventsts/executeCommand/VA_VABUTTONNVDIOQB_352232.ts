

//Entity: PaymentAutomatic
//PaymentAutomatic. (Button) View: RepaymentCreateForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_VABUTTONNVDIOQB_352232 = (
  entities: Model,
  executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {

    executeCommandEventArgs.commons.execServer = false;

    entities.PaymentAutomatic.institution = null
    entities.PaymentAutomatic.institutionName = null
    entities.PaymentAutomatic.institutionOld = null
    entities.PaymentAutomatic.client = null
    entities.PaymentAutomatic.clientName = null
    entities.PaymentAutomatic.clientOld = null
    entities.PaymentAutomatic.comments = null
    entities.PaymentAutomatic.percentage = 0.0
    entities.PaymentAutomatic.account = null

    executeCommandEventArgs.commons.args.mode = executeCommandEventArgs.commons.constants.mode.Insert
  //  executeCommandEventArgs.commons.api.viewState.label("VA_VABUTTONNVDIOQB_352232", "LNSPR.LBL_LOANS_LIMPIARVF_75606");//Cmd Limpiar
  //  executeCommandEventArgs.commons.api.viewState.label("VA_VABUTTONXOCQZHP_695232", "LNSPR.LBL_LOANS_AADIRWOQO_72396");//Cmd Añadir
};