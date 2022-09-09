

//Entity: Payment
//Payment.paymentType (ComboBox) View: PaymentsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_PAYMENTSTYPESSS_684199 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.api.navigation.getCustomDialogParameters().LoanSearchFilter = changedEventArgs.commons.api.parentVc?.model.LoanSearchFilter;
    changedEventArgs.commons.execServer = true;

    if(changedEventArgs.newValue === 'NDAH_FINAN') {
        changedEventArgs.commons.api.viewState.show('VA_CUSTOMERMUPBSTT_916199');
        changedEventArgs.commons.api.viewState.show('VA_REFERENCEUFYFMY_654199');
    } else {
        changedEventArgs.commons.api.viewState.hide('VA_CUSTOMERMUPBSTT_916199');
        changedEventArgs.commons.api.viewState.hide('VA_REFERENCEUFYFMY_654199');
        entities.Payment.reference = null;
        entities.Payment.customer = null;
    }
    //changedEventArgs.commons.serverParameters.Payment = true;
};