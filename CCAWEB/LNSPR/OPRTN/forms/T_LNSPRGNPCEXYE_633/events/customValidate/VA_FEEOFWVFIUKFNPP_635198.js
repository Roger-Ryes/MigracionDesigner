//Entity: AmortizationFormEntity
//AmortizationFormEntity.fee (TextInputBox) View: OperationPaymentDayUpdateForm

task.customValidate.VA_FEEOFWVFIUKFNPP_635198 = function(  entities, customValidateEventArgs ) {
    if(entities.AmortizationFormEntity.amount < entities.AmortizationFormEntity.fee){
        entities.AmortizationFormEntity.fee=0;
        customValidateEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_CUOTANOCP_46972", false, null, timer);
    }
    customValidateEventArgs.commons.execServer = false;
};