//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: PaymentMaintenanceModal
    task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
        onCloseModalEventArgs.commons.execServer = false;
        
    };