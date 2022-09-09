
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: PaymentAutomaticCreateForm
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
     $("button.close").hide();
    var nav = renderEventArgs.commons.api.navigation;
    var viewState = renderEventArgs.commons.api.viewState;

    if(nav.getCustomDialogParameters()){
        entities.PaymentAutomatic.bankId = nav.getCustomDialogParameters().banco
        entities.PaymentAutomatic.paymentMethod = nav.getCustomDialogParameters().paymentMethod

        if(nav.getCustomDialogParameters().paymentCategory=='PLANO'){
            viewState.hide('VA_ACCOUNTEPABOHPV_776232')
            viewState.show('VA_INSTITUTIONNKHZ_389232')
            viewState.show('VA_INSTITUTIONNEAE_518232')
        }else if(nav.getCustomDialogParameters().paymentCategory=='NDAH'){
            viewState.show('VA_ACCOUNTEPABOHPV_776232')
            viewState.hide('VA_INSTITUTIONNKHZ_389232')
            viewState.hide('VA_INSTITUTIONNEAE_518232')
        }else{
            viewState.disable('G_REPAYMEEAE_620232')
            viewState.disable('G_REPAYMEERE_452232')
        }
    }
    renderEventArgs.commons.api.grid.refresh('QV_WX74_OJZ40',{
        bankId: entities.PaymentAutomatic.bankId,
        paymentMethod: entities.PaymentAutomatic.paymentMethod
    });
};