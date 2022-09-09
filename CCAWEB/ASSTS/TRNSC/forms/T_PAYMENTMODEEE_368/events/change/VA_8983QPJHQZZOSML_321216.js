//Entity: PaymentForm
    //PaymentForm.payAmount (TextInputBox) View: PaymentModeForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_8983QPJHQZZOSML_321216 = function( entities, changeEventArgs ) {


    entities.LoanAdditionalInformation = changeEventArgs.commons.api.parentVc.model.LoanAdditionalInformation;

    if (montoIni == changeEventArgs.newValue) {
        entities.PaymentForm.currencyFlagAux = "1";
        entities.PaymentForm.amountDsDec = montoIniDsDec;
    }

    if (entities.PaymentForm.currencyFlagAux == "1") {

        changeEventArgs.commons.execServer = false;
        entities.PaymentForm.currencyFlagAux = "-1";
        entities.PaymentForm.amountTr = entities.DisbursementResult.difference;
    } else {
        entities.PaymentForm.amountDsDec = changeEventArgs.newValue;
        changeEventArgs.commons.serverParameters.PaymentForm = true;
        changeEventArgs.commons.serverParameters.LoanAdditionalInformation = true;
        changeEventArgs.commons.serverParameters.GeneralParameters = true;
        changeEventArgs.commons.serverParameters.Loan = true;
        changeEventArgs.commons.serverParameters.DisbursementResult = true;

        changeEventArgs.commons.execServer = true;
            }

    };