//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: Fund
    task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
        onCloseModalEventArgs.commons.execServer = false;
        let grid: any = onCloseModalEventArgs.commons.api.grid;
        grid.refresh('QV_8975_37395');
    };