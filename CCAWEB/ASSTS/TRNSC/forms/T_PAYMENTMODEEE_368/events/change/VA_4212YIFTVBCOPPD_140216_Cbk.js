//Start signature to Callback event to VA_4212YIFTVBCOPPD_140216
task.changeCallback.VA_4212YIFTVBCOPPD_140216 = function(entities, changeCallbackEventArgs) {
    if (changeCallbackEventArgs.success) {
        entities.PaymentForm.currencyFlagAux = '1';
        montoIni = entities.PaymentForm.payAmount;
        montoIniDsDec = entities.PaymentForm.amountDsDec;
    }
};