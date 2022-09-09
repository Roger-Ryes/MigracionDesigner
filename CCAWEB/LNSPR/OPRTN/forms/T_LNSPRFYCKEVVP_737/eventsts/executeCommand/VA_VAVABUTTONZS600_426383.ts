//Entity: LoansLines
//LoansLines. (Button) View: LoansLines
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_VAVABUTTONZS600_426383 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    if (entities.LoansLines.clientCode) {
        executeCommandEventArgs.commons.api.grid.refresh('QV_ZTPR_WQQ92');
    } else {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_CLIENTEQI_78561', false, null, timer);
    }
    executeCommandEventArgs.commons.execServer = false;
};