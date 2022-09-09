
//Entity: OtherCharges
//OtherCharges.value (TextInputBox) View: ProjectOtherCharges
task_customValidate_VA_VALUENGWHVWDDNU_188696 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
) => {
    customValidateEventArgs.commons.execServer = false;

    let validationValue: any = entities.OtherCharges.value;

    if(validationValue <0){
        customValidateEventArgs.errorMessage = "LNSPR.MSG_LNSPR_ELVALOREG_50853";
        customValidateEventArgs.isValid = false;
    }else if (validationValue == 0){
        customValidateEventArgs.errorMessage = "LNSPR.MSG_LNSPR_ELVALORDO_71473";
        customValidateEventArgs.isValid = false;
        
    }else{
        customValidateEventArgs.isValid = true;
    }
};