//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: Payment maintenance
    task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
        onCloseModalEventArgs.commons.execServer = false;
        let isAccept: any;


        if (typeof onCloseModalEventArgs.result === "boolean") {
                isAccept = onCloseModalEventArgs.result;
            }
        if (isAccept) {
            onCloseModalEventArgs.commons.api.grid.refresh("QV_7546_25470");
            //onCloseModalEventArgs.commons.api.grid.refresh("QV_7546_25470",{param:{}});
        }
    };