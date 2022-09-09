//Entity: AmortizationFormEntity
//AmortizationFormEntity.firstDueDate (DateField) View: OperationPaymentDayUpdateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_FIRSTDUEDATEACN_138198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue.getDate() && (entities.AmortizationFormEntity.paymentDay != changedEventArgs.newValue.getDate() && entities.AmortizationFormEntity.fixedPayementDay))
        entities.AmortizationFormEntity.paymentDay = changedEventArgs.newValue.getDate();

};
