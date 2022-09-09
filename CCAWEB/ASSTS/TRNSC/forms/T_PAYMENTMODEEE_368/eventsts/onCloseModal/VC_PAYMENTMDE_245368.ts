//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: PaymentModeForm
    task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
        onCloseModalEventArgs.commons.execServer = false;
        if (onCloseModalEventArgs.closedViewContainerId == "VC_BANKACCOMU_224777") {
            if (typeof onCloseModalEventArgs.result.account != "undefined") {
                entities.PaymentForm.accountNumber = onCloseModalEventArgs.result.account.trimRight();
                //entities.PaymentForm.note = onCloseModalEventArgs.result.accountName.trimRight();
            }
        }
    };