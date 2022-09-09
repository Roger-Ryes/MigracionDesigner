

//Entity: AmortizationEntity
//AmortizationEntity.fee (TextInputBox) View: OperationPaymentDayUpdateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_FEEOLAUUHKGPDCB_657198 = function(  entities, changedEventArgs ) {
    changedEventArgs.commons.execServer = false;
    diferenciaCapitalCuota = +changedEventArgs.newValue - +changedEventArgs.oldValue;   
};