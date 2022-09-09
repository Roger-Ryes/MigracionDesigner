//Entity: Negotiation
    //Negotiation.additionalPayments (CheckBox) View: NegotiationPaymentsModal
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_TEXTINPUTBOXAPF_912225 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
        changedEventArgs.commons.execServer = false;
        let viewState: any = changedEventArgs.commons.api.viewState;

        if (entities.Negotiation.additionalPayments){
            viewState.show('VA_5608AAOSYWATGEZ_226225');
        } else {
            viewState.hide('VA_5608AAOSYWATGEZ_226225');            
        }
        entities.Negotiation.reductionType = 'T'
    };