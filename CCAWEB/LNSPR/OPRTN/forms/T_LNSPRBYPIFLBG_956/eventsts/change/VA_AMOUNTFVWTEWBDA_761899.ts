//Entity: OperationEntity
//OperationEntity.amount (TextInputBox) View: PassivePortfolioCreation
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_AMOUNTFVWTEWBDA_761899 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    entities.OperationEntity.amountApproved = changedEventArgs.newValue;

};
