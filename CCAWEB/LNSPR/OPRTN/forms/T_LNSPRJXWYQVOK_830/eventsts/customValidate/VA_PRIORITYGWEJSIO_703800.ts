//Entity: OperationItemsList
//OperationItemsList.priority (TextInputBox) View: ModalOperationItems
task_customValidate_VA_PRIORITYGWEJSIO_703800 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
) => {

    customValidateEventArgs.commons.execServer = false;
    if (customValidateEventArgs.commons.api.vc.mode == customValidateEventArgs.commons.constants.mode.Update && prioridad != undefined && prioridad!= null && prioridad >0) {

        if (customValidateEventArgs.currentValue > prioridad) {
            customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.LBL_LNSPR_VALORINRO_94797')
            customValidateEventArgs.isValid = false;
        } else {
            customValidateEventArgs.isValid = true;
        }

    }
};
