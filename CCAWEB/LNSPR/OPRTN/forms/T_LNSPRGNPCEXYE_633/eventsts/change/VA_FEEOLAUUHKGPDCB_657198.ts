

//Entity: AmortizationEntity
//AmortizationEntity.fee (TextInputBox) View: OperationPaymentDayUpdateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_FEEOLAUUHKGPDCB_657198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    diferenciaCapitalCuota = +changedEventArgs.newValue - +changedEventArgs.oldValue;   
};