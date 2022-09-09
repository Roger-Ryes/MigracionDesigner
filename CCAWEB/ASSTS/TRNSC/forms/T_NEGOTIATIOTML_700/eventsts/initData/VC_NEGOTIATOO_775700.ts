//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: NegotiationPaymentsModal
    task_initData_VC_NEGOTIATOO_775700 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = false;
        let viewState: any = initDataEventArgs.commons.api.viewState;
        let dialogParameters: any = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();

        entities.Negotiation.paymentType = dialogParameters.negotiation.paymentType;
        entities.Negotiation.interestType = dialogParameters.negotiation.interestType;
        entities.Negotiation.fullFee = dialogParameters.negotiation.fullFee;
        entities.Negotiation.additionalPayments = dialogParameters.negotiation.additionalPayments;

        if(entities.Negotiation.additionalPayments) {
            entities.Negotiation.reductionType = dialogParameters.negotiation.reductionType;
            viewState.show('VA_5608AAOSYWATGEZ_226225');
        } else {
            viewState.hide('VA_5608AAOSYWATGEZ_226225');
            entities.Negotiation.reductionType = 'T';
        }
    };