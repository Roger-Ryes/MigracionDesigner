//Entity: LoanItemsList
//LoanItemsList.minRate (TextInputBox) View: ModalLoanItemsForm
task.customValidate.VA_MINRATEWSNBWPYC_520980 = function (entities, customValidateEventArgs) {

    customValidateEventArgs.commons.execServer = false;


    if (((customValidateEventArgs.currentValue || customValidateEventArgs.currentValue == 0) &&
            (entities.LoanItemsList.percentage || entities.LoanItemsList.percentage == 0) && customValidateEventArgs.currentValue > entities.LoanItemsList.percentage)) {
        customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_MNIMODEAB_13294')
        customValidateEventArgs.isValid = false;
    } else {
        customValidateEventArgs.isValid = true;
    }

};
