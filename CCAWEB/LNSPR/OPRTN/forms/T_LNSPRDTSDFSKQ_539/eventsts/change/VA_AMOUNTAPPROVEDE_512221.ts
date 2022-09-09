//Entity: OperationEntity
//OperationEntity.amountApproved (TextInputBox) View: OperationForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_AMOUNTAPPROVEDE_512221 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    if(entities.OperationEntity.amount){
        if((entities.OperationEntity.amount<=entities.OperationEntity.amountApproved) && !fromAmount){ 
            changedEventArgs.commons.api.errors.validateInput('VA_AMOUNTPCRKOKHWA_216221', false);
           
        }else{
            changedEventArgs.commons.api.viewState.focus('VA_AMOUNTPCRKOKHWA_216221');
        }
    }

    fromAmount = false;
    
    

};
