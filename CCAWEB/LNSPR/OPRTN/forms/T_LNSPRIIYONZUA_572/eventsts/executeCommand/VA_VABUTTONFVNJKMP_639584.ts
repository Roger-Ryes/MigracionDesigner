

//Entity: LoanSaleFilter
//LoanSaleFilter. (Button) View: LoanSaleForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_VABUTTONFVNJKMP_639584 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let viewState: any = executeCommandEventArgs.commons.api.viewState;
    viewState.disable('CM_TLNSPRII_6S6'); //boton guardar

    executeCommandEventArgs.commons.execServer = false;
};