//Entity: OperationCRUDFormEntity
//OperationCRUDFormEntity. (Button) View: OperationLoansForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONVLCBANL_971221 = function(  entities, executeCommandEventArgs ) {
    if (entities.OperationEntity.functionality && (entities.OperationEntity.functionality != 'SCO' && entities.OperationEntity.functionality != 'C')) {
        executeCommandEventArgs.commons.execServer = true;
    } else {
        executeCommandEventArgs.commons.execServer = false;
        addDebtorToGrid(entities, executeCommandEventArgs);
    }
};