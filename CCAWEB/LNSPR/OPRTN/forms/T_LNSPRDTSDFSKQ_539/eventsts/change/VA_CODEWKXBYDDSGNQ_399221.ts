//Entity: OperationCRUDFormEntity
//OperationCRUDFormEntity.code (TextInputButton) View: OperationLoansForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_CODEWKXBYDDSGNQ_399221 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    

    if (changedEventArgs.newValue) {
        changedEventArgs.commons.execServer = true;
    } else {
        entities.OperationCRUDFormEntity.fullName = null;
        entities.OperationCRUDFormEntity.idNumber = null;
        changedEventArgs.commons.execServer = false;
    }
    
};