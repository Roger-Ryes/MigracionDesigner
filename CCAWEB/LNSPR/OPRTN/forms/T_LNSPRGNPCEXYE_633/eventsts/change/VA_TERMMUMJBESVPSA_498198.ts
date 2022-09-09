//Entity: AmortizationFormEntity
//AmortizationFormEntity.term (TextInputBox) View: OperationPaymentDayUpdateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_TERMMUMJBESVPSA_498198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    
    changedEventArgs.commons.execServer = false;

    if (!flagUpdateFee && entities.AmortizationFormEntity.ballonFee == 'N') {
        entities.AmortizationFormEntity.fee = 0;
        flagUpdateTerm = true;
    }
    flagUpdateFee = false;
};