//Entity: OperationEntity
//OperationEntity.amount (TextInputBox) View: OperationLoansForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_AMOUNTPCRKOKHWA_216221 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    
    if (monto){
        if(firstAmount){
           entities.OperationEntity.amountApproved = entities.OperationEntity.amount;
           firstAmount = false;
        }
    }
    
    fromAmount = true;
    
   
};