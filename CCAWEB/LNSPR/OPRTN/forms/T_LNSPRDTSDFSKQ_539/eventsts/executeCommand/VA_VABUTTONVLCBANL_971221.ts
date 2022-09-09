//Entity: OperationCRUDFormEntity
//OperationCRUDFormEntity. (Button) View: OperationLoansForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_VABUTTONVLCBANL_971221 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    if (entities.OperationEntity.functionality && (entities.OperationEntity.functionality != 'SCO' && entities.OperationEntity.functionality != 'C')) {
        executeCommandEventArgs.commons.execServer = true;
    } else {
        executeCommandEventArgs.commons.execServer = false;
        this.addDebtorToGrid(entities, executeCommandEventArgs);
    }
};