//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: OtherCharges
    task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
        onCloseModalEventArgs.commons.execServer = false;
        onCloseModalEventArgs.commons.api.grid.refresh("QV_8396_63374");
        //onCloseModalEventArgs.commons.serverParameters.entityName = true;
    };