//Entity: OperationEntity
//OperationEntity.mail (TextInputBox) View: SyndicatedListForm
task.customValidate.VA_MAILHXHVMKQUYBR_360405 = function (entities, customValidateEventArgs) {
    var validationValue = entities.OperationEntity.mail;

    if (validationValue && !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(validationValue))) {
        customValidateEventArgs.errorMessage = "LNSPR.MSG_LNSPR_INGRESERI_87890";
        customValidateEventArgs.isValid = false;
    } else {
        customValidateEventArgs.isValid = true;
    }
    customValidateEventArgs.commons.execServer = false;

};
