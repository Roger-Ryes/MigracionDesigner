//Entity: OperationEntity
//OperationEntity.amount (TextInputBox) View: PassivePortfolioCreation
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_AMOUNTFVWTEWBDA_761899 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;
    entities.OperationEntity.amountApproved = changedEventArgs.newValue;

};
