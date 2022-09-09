//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: PaymentsForm
    task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
        onCloseModalEventArgs.commons.execServer = true;
        //onCloseModalEventArgs.commons.serverParameters.entityName = true;
    };