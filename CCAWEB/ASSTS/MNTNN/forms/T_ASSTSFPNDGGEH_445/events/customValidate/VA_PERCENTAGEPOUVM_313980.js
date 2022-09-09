//Entity: LoanItemsList
//LoanItemsList.percentage (TextInputBox) View: ModalLoanItemsForm
task.customValidate.VA_PERCENTAGEPOUVM_313980 = function (entities, customValidateEventArgs) {

    customValidateEventArgs.commons.execServer = false;

    if (((entities.LoanItemsList.minRate || entities.LoanItemsList.minRate == 0) && customValidateEventArgs.currentValue < entities.LoanItemsList.minRate) || ((entities.LoanItemsList.maxRate || entities.LoanItemsList.maxRate == 0) && customValidateEventArgs.currentValue > entities.LoanItemsList.maxRate)) {
        customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_TASADEBIQ_21023')
        customValidateEventArgs.isValid = false;
    } else {
        customValidateEventArgs.isValid = true;
    }

};
