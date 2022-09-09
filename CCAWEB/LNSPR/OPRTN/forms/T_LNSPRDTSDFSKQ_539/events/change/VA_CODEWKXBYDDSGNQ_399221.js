//Entity: OperationCRUDFormEntity
//OperationCRUDFormEntity.code (TextInputButton) View: OperationLoansForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_CODEWKXBYDDSGNQ_399221 = function(  entities, changedEventArgs ) {
    

    if (changedEventArgs.newValue) {
        changedEventArgs.commons.execServer = true;
    } else {
        entities.OperationCRUDFormEntity.fullName = null;
        entities.OperationCRUDFormEntity.idNumber = null;
        changedEventArgs.commons.execServer = false;
    }
    
};