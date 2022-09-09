//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: SimulateMain
    task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
        onCloseModalEventArgs.commons.execServer = false;

        let cancelModal: any = false;

        if (onCloseModalEventArgs.closedViewContainerId == "VC_NEGOTIATOO_775700") {
            if (typeof onCloseModalEventArgs.result === "boolean") {
                cancelModal = onCloseModalEventArgs.result;
            }
            if (!cancelModal && typeof onCloseModalEventArgs.result.paymentType !== "undefined") {
                entities.Negotiation.paymentType = onCloseModalEventArgs.result.paymentType;
                entities.Negotiation.interestType = onCloseModalEventArgs.result.interestType;
                entities.Negotiation.fullFee = onCloseModalEventArgs.result.fullFee;
                entities.Negotiation.additionalPayments = onCloseModalEventArgs.result.additionalPayments;
                entities.Negotiation.reductionType = onCloseModalEventArgs.result.reductionType;
                entities.Payment.entireFee = onCloseModalEventArgs.result.fullFee ? 'S' : 'N';
                entities.Payment.advance = onCloseModalEventArgs.result.additionalPayments ? 'S' : 'N';
            onCloseModalEventArgs.commons.execServer = true;
            }
        }
    };