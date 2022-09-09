//Entity: OperationCRUDFormEntity
//OperationCRUDFormEntity. (Button) View: PassivePortfolioCreation
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_VAVABUTTONTWR88_356899 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let grid: any = executeCommandEventArgs.commons.api.grid;
    executeCommandEventArgs.commons.execServer = false;
    if (entities.OperationCRUDFormEntity.fullName &&
        entities.OperationCRUDFormEntity.idNumber) {
        let debtor: any = {
            role: 'F',
            fullName: entities.OperationCRUDFormEntity.fullName,
            idNumber: entities.OperationCRUDFormEntity.idNumber,
            code: entities.OperationCRUDFormEntity.code,
            score: null,
            type: null,
            description: null
        };

        grid.addRow('DebtorEntity', debtor, true);
    }
};
