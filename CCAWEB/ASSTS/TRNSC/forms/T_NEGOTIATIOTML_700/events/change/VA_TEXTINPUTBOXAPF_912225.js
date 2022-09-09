//Entity: Negotiation
    //Negotiation.additionalPayments (CheckBox) View: NegotiationPaymentsModal
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_TEXTINPUTBOXAPF_912225 = function(  entities, changedEventArgs ) {
        changedEventArgs.commons.execServer = false;
        var viewState = changedEventArgs.commons.api.viewState;
        
        if (entities.Negotiation.additionalPayments){
            viewState.show('VA_5608AAOSYWATGEZ_226225');
        } else {
            viewState.hide('VA_5608AAOSYWATGEZ_226225');            
        }
        entities.Negotiation.reductionType = 'T'
    };