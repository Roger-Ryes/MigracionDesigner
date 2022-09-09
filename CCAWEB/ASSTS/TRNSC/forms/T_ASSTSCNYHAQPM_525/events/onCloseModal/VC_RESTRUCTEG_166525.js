//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: RestructuringDetail
task.onCloseModalEvent = function (entities, onCloseModalEventArgs) {

    onCloseModalEventArgs.commons.execServer = false;
    if (onCloseModalEventArgs.closedViewContainerId == "VC_RESTRUCTRR_543289") {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.dialogCloseType == 0 && onCloseModalEventArgs.result.response) {
            onCloseModalEventArgs.commons.api.vc.closeModal({
                response: false
            });
        }
    }

};
