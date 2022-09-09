
//Entity: Payment
//Payment.value (TextInputBox) View: PaymentsForm
task_customValidate_VA_VALUEXDSHNMADTK_664199 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
) => {
    let validationValue: any = entities.Payment.value;

    if(validationValue <0){
        customValidateEventArgs.errorMessage = "LNSPR.MSG_LNSPR_NOSEPUERE_22098";
        customValidateEventArgs.isValid = false;
    }else if (validationValue == 0){
        customValidateEventArgs.errorMessage = "LNSPR.MSG_LNSPR_NOSEPUEAD_48981";
        customValidateEventArgs.isValid = false;
       
    }else{
        customValidateEventArgs.isValid = true;
    }
    customValidateEventArgs.commons.execServer = false;
};



