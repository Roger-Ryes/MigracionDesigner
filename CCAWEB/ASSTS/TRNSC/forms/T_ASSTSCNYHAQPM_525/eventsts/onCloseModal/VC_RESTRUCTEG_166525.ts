//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: RestructuringDetail
task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;
    if (onCloseModalEventArgs.closedViewContainerId == "VC_RESTRUCTRR_543289") {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.dialogCloseType == 0 && onCloseModalEventArgs.result.response) {
            onCloseModalEventArgs.commons.api.navigation.closeModal({
                response: false
            });
        }
    }

};
