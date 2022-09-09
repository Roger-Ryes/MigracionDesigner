//Entity: OperationCRUDFormEntity
//OperationCRUDFormEntity. (Button) View: PassivePortfolioCreation
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAVABUTTONTWR88_356899 = function (entities, executeCommandEventArgs) {
    var grid = executeCommandEventArgs.commons.api.grid;
    executeCommandEventArgs.commons.execServer = false;
    if (entities.OperationCRUDFormEntity.fullName &&
        entities.OperationCRUDFormEntity.idNumber) {
        var debtor = {
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
