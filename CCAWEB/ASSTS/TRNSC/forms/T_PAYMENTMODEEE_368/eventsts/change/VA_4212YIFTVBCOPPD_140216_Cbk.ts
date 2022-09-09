//Start signature to Callback event to VA_4212YIFTVBCOPPD_140216
task_changeCallback_VA_4212YIFTVBCOPPD_140216 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
) => {
    if (changeCallbackEventArgs.success) {
        entities.PaymentForm.currencyFlagAux = '1';
        montoIni = entities.PaymentForm.payAmount;
        montoIniDsDec = entities.PaymentForm.amountDsDec;
    }
};