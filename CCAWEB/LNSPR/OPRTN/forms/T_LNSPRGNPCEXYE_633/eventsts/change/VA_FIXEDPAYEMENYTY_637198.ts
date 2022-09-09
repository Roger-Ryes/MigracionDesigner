//Entity: AmortizationFormEntity
//AmortizationFormEntity.fixedPayementDay (RadioButtonList) View: OperationPaymentDayUpdateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_FIXEDPAYEMENYTY_637198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;

    if (!entities.AmortizationFormEntity.fixedPayementDay) {
        entities.AmortizationFormEntity.paymentDay = null;
        viewState.disable('VA_PAYMENTDAYEFRJN_549198');
        //viewState.disable('VA_EXTENDEDPAYMEDA_710198');
        viewState.hide('VA_EXTENDEDPAYMEDA_710198');
    } else {
        viewState.enable('VA_PAYMENTDAYEFRJN_549198');
        //viewState.enable('VA_EXTENDEDPAYMEDA_710198');
        viewState.hide('VA_EXTENDEDPAYMEDA_710198');
        if (entities.AmortizationFormEntity.firstDueDate)
            entities.AmortizationFormEntity.paymentDay = entities.AmortizationFormEntity.firstDueDate?.getDate();
    }
};