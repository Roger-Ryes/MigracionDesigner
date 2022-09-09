//Entity: OperationEntity
//OperationEntity.amount (TextInputBox) View: OperationForm
task_customValidate_VA_AMOUNTPCRKOKHWA_216221 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
) => {

    customValidateEventArgs.commons.execServer = false;
    if (entities.OperationEntity.amountApproved && (customValidateEventArgs.currentValue > entities.OperationEntity.amountApproved)) {
        customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_MONTODEON_19476');
        customValidateEventArgs.isValid = false;
    } else {
        customValidateEventArgs.isValid = true;
        customValidateEventArgs.commons.api.viewState.focus('VA_AMOUNTAPPROVEDE_512221');
        
    }

};
