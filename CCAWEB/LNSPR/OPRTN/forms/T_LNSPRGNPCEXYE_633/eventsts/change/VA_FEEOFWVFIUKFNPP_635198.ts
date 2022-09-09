//Entity: AmortizationFormEntity
//AmortizationFormEntity.fee (TextInputBox) View: OperationPaymentDayUpdateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_FEEOFWVFIUKFNPP_635198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (!flagUpdateTerm) {
        flagUpdateFee = true;
    }


    if (changedEventArgs.newValue) {
        flagUpdateTerm = false;
    } else {
        flagUpdateTerm = true;
    }

};
