//Entity: OperationItemsList
//OperationItemsList.maxRate (TextInputBox) View: ModalOperationItems
task_customValidate_VA_MAXRATEVBDOKWML_251800 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
) => {

    customValidateEventArgs.commons.execServer = false;

    if (((customValidateEventArgs.currentValue || customValidateEventArgs.currentValue == 0) && (entities.OperationItemsList.percentage || entities.OperationItemsList.percentage == 0) && customValidateEventArgs.currentValue < entities.OperationItemsList.percentage)) {
        customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_MXIMODEUQ_72863')
        customValidateEventArgs.isValid = false;
    } else {
        customValidateEventArgs.isValid = true;
    }

};
