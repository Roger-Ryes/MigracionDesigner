

//Entity: PaymentAutomatic
//PaymentAutomatic.client (TextInputButton) View: PaymentAutomaticCreateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_CLIENTNIXWOQDSD_193232 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    if(entities.PaymentAutomatic.client != entities.PaymentAutomatic.clientOld){
        entities.PaymentAutomatic.account = null
        changedEventArgs.commons.api.viewState.refreshData('VA_ACCOUNTEPABOHPV_776232');
    }
};