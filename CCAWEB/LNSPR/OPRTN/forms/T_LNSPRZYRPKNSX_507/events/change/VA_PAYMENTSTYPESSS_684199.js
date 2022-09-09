

//Entity: Payment
//Payment.paymentType (ComboBox) View: PaymentsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_PAYMENTSTYPESSS_684199 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.api.vc.parentVc.customDialogParameters.LoanSearchFilter = changedEventArgs.commons.api.vc.parentVc.model.LoanSearchFilter;
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