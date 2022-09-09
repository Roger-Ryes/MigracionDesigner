//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: PaymentModeForm
    task.render = function (entities, renderEventArgs){
        renderEventArgs.commons.execServer = false;
         entities.PaymentForm.clientFullName = entities.Loan.clientID +" - "+ entities.Loan.clientName;
         entities.PaymentForm.clientId = entities.Loan.clientID;
         
    
         entities.PaymentForm.payFormCategory = ""; 

    //renderEventArgs.commons.api.viewState.hide('VA_6057SWXKCQQHOIS_464216');
    renderEventArgs.commons.api.viewState.hide('Spacer1695');
    //renderEventArgs.commons.api.viewState.hide('VA_6386FQVBTKCYFWG_461216');


    renderEventArgs.commons.api.viewState.disable('VA_QUOTATIONTRMFKT_807216');
    renderEventArgs.commons.api.viewState.disable('VA_QUOTETYPETRDZXF_817216');
    };